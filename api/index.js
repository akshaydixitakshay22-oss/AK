/* Codes4U Enterprise Secure Vercel Serverless API Handler */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { getAdminTemplateHTML } = require('../adminTemplate');

const SECRET_KEY = process.env.JWT_SECRET || 'super-secret-codes4u-key-2026-secure-auth-token-98765';

// Enterprise-grade PBKDF2 Password Hashing (100,000 iterations)
function hashPassword(password, salt = null) {
  if (!password) return '';
  if (!salt) salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
  return `${salt}:${hash}`;
}

function verifyPassword(password, storedHash) {
  if (!password || !storedHash) return false;
  if (!storedHash.includes(':')) {
    return password === storedHash;
  }
  const [salt, originalHash] = storedHash.split(':');
  const hash = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
  return hash === originalHash;
}

// HMAC-SHA256 Bearer Token Generation & Verification
function generateToken(payload) {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const exp = Date.now() + (24 * 60 * 60 * 1000);
  const body = Buffer.from(JSON.stringify({ ...payload, exp })).toString('base64url');
  const signature = crypto.createHmac('sha256', SECRET_KEY).update(`${header}.${body}`).digest('base64url');
  return `${header}.${body}.${signature}`;
}

function verifyToken(authHeader) {
  if (!authHeader) return null;
  const token = authHeader.replace('Bearer ', '').trim();
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const [header, body, signature] = parts;
  const expectedSignature = crypto.createHmac('sha256', SECRET_KEY).update(`${header}.${body}`).digest('base64url');
  if (signature !== expectedSignature) return null;
  try {
    const payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
    if (payload.exp && Date.now() > payload.exp) return null;
    return payload;
  } catch (e) {
    return null;
  }
}

let dbCache = null;

function getDB() {
  if (dbCache) return dbCache;
  try {
    const DB_FILE = path.join(process.cwd(), 'database.json');
    if (fs.existsSync(DB_FILE)) {
      const data = fs.readFileSync(DB_FILE, 'utf8');
      dbCache = JSON.parse(data);
      if (dbCache.adminCredentials && dbCache.adminCredentials.passwordHash && !dbCache.adminCredentials.passwordHash.includes(':')) {
        dbCache.adminCredentials.passwordHash = hashPassword(dbCache.adminCredentials.passwordHash);
      }
      return dbCache;
    }
  } catch (err) {}

  dbCache = {
    adminCredentials: { username: 'superadmin', passwordHash: hashPassword('superadmin123') },
    stores: [],
    users: [],
    siteSettings: {}
  };
  return dbCache;
}

module.exports = (req, res) => {
  try {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
      return res.status(204).end();
    }

    const url = req.url || '/';
    const pathname = url.split('?')[0];
    const db = getDB();

    // 1. Auth Login Endpoint
    if (pathname.includes('/auth/login') && req.method === 'POST') {
      const body = req.body || {};
      const username = (body.username || '').trim().toLowerCase();
      const password = body.password || '';

      if (username === db.adminCredentials.username.toLowerCase() && verifyPassword(password, db.adminCredentials.passwordHash)) {
        const token = generateToken({ id: 'admin-1', username: db.adminCredentials.username, role: 'admin' });
        return res.status(200).json({
          success: true,
          role: 'admin',
          token: token,
          message: 'Super Admin authenticated securely.'
        });
      }

      const user = (db.users || []).find(u => u.name.toLowerCase() === username || u.id.toLowerCase() === username);
      if (user) {
        if (user.status && user.status.includes('Blocked')) {
          return res.status(403).json({ success: false, message: 'Account is blocked by Super Admin.' });
        }
        if (user.password && !verifyPassword(password, user.password)) {
          return res.status(401).json({ success: false, message: 'Invalid credentials.' });
        }
        const token = generateToken({ id: user.id, username: user.name, role: 'user' });
        return res.status(200).json({
          success: true,
          role: 'user',
          token: token,
          user: { id: user.id, name: user.name, fullName: user.fullName || user.name, status: user.status }
        });
      }

      return res.status(401).json({ success: false, message: 'Invalid credentials.' });
    }

    // 2. Auth Signup Endpoint
    if (pathname.includes('/auth/signup') && req.method === 'POST') {
      const body = req.body || {};
      const email = (body.email || '').trim();
      const fullName = (body.name || '').trim();
      const password = body.password || '';

      if (!email) {
        return res.status(400).json({ success: false, message: 'Email required.' });
      }

      let existing = (db.users || []).find(u => u.name.toLowerCase() === email.toLowerCase());
      if (existing) {
        return res.status(200).json({ success: true, user: { id: existing.id, name: existing.name, fullName: existing.fullName } });
      }

      const newId = 'USR-' + Math.floor(1000 + Math.random() * 9000);
      const newUser = {
        id: newId,
        name: email,
        fullName: fullName || email.split('@')[0],
        password: hashPassword(password || 'default123'),
        loginTime: new Date().toISOString().replace('T', ' ').substring(0, 16),
        codesUsed: 0,
        status: '🟢 Active',
        lastActive: 'Just registered',
        device: 'Vercel Web App',
        shoppingVisits: [],
        copiedCodes: [],
        orders: []
      };

      if (!db.users) db.users = [];
      db.users.unshift(newUser);

      const token = generateToken({ id: newUser.id, username: newUser.name, role: 'user' });
      return res.status(201).json({ success: true, token, user: { id: newUser.id, name: newUser.name, fullName: newUser.fullName } });
    }

    // 3. Protected Admin Template Endpoint
    if (pathname.includes('/admin/template') && req.method === 'GET') {
      const authHeader = req.headers['authorization'];
      const payload = verifyToken(authHeader);
      if (!payload || payload.role !== 'admin') {
        return res.status(401).json({ success: false, message: 'Unauthorized: Valid Admin session required.' });
      }
      res.setHeader('Content-Type', 'text/html');
      return res.status(200).send(getAdminTemplateHTML());
    }

    // 4. Stores Endpoints
    if (pathname.includes('/stores') && req.method === 'GET') {
      return res.status(200).json(db.stores || []);
    }

    if (pathname.includes('/stores') && req.method === 'POST') {
      const authHeader = req.headers['authorization'];
      const payload = verifyToken(authHeader);
      if (!payload || payload.role !== 'admin') {
        return res.status(401).json({ success: false, message: 'Unauthorized: Admin token required.' });
      }
      const body = req.body || {};
      if (Array.isArray(body)) {
        db.stores = body;
      }
      return res.status(200).json({ success: true, count: (db.stores || []).length });
    }

    // 5. Users Endpoints
    if (pathname.includes('/users') && !pathname.includes('/users/sync') && req.method === 'GET') {
      const authHeader = req.headers['authorization'];
      const payload = verifyToken(authHeader);
      if (!payload || payload.role !== 'admin') {
        return res.status(401).json({ success: false, message: 'Unauthorized: Admin token required.' });
      }
      return res.status(200).json(db.users || []);
    }

    if (pathname.includes('/users/sync') && req.method === 'POST') {
      const body = req.body || {};
      if (body.user && body.user.id) {
        let existingIndex = (db.users || []).findIndex(u => u.id === body.user.id || u.name === body.user.name);
        if (existingIndex !== -1) {
          db.users[existingIndex].shoppingVisits = body.user.shoppingVisits || db.users[existingIndex].shoppingVisits || [];
          db.users[existingIndex].copiedCodes = body.user.copiedCodes || db.users[existingIndex].copiedCodes || [];
          db.users[existingIndex].orders = body.user.orders || db.users[existingIndex].orders || [];
          db.users[existingIndex].codesUsed = body.user.codesUsed || db.users[existingIndex].codesUsed || 0;
          db.users[existingIndex].lastActive = body.user.lastActive || 'Just active';
        } else {
          if (!db.users) db.users = [];
          db.users.unshift(body.user);
        }
      }
      return res.status(200).json({ success: true });
    }

    // 6. Settings Endpoints
    if (pathname.includes('/settings') && req.method === 'GET') {
      return res.status(200).json(db.siteSettings || {});
    }

    if (pathname.includes('/settings') && req.method === 'POST') {
      const authHeader = req.headers['authorization'];
      const payload = verifyToken(authHeader);
      if (!payload || payload.role !== 'admin') {
        return res.status(401).json({ success: false, message: 'Unauthorized: Admin token required.' });
      }
      db.siteSettings = req.body || {};
      return res.status(200).json({ success: true });
    }

    return res.status(200).json({ success: true, message: 'Codes4U Vercel API Active', timestamp: Date.now() });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};
