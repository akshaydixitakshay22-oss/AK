/* Codes4U Enterprise-Grade Secure Node.js REST API Backend Server */
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const crypto = require('crypto');

const PORT = process.env.PORT || 5000;
const DB_FILE = path.join(__dirname, 'database.json');
const SECRET_KEY = process.env.JWT_SECRET || 'super-secret-codes4u-key-2026-secure-auth-token-98765';

// ==========================================
// SECURITY & CRYPTOGRAPHY UTILITIES
// ==========================================

// Enterprise-grade PBKDF2 Password Hashing (100,000 iterations)
function hashPassword(password, salt = null) {
  if (!password) return '';
  if (!salt) salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
  return `${salt}:${hash}`;
}

function verifyPassword(password, storedHash) {
  if (!password || !storedHash) return false;
  // Backward-compatibility check for plain text passwords
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
  const exp = Date.now() + (24 * 60 * 60 * 1000); // 24 Hours Expiry
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

// In-Memory Rate Limiting (15 requests per minute per IP for Auth endpoints)
const rateLimitMap = new Map();

function isRateLimited(ip, limit = 15, windowMs = 60000) {
  const now = Date.now();
  const record = rateLimitMap.get(ip) || { count: 0, resetTime: now + windowMs };
  if (now > record.resetTime) {
    record.count = 1;
    record.resetTime = now + windowMs;
  } else {
    record.count += 1;
  }
  rateLimitMap.set(ip, record);
  return record.count > limit;
}

// Input Sanitization for Security
function sanitize(input) {
  if (typeof input !== 'string') return input;
  return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ==========================================
// DATABASE ACCESS & MIGRATION
// ==========================================

function readDB() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      const defaultAdminPass = process.env.ADMIN_DEFAULT_PASSWORD || 'superadmin123';
      const initialDB = {
        adminCredentials: {
          username: process.env.ADMIN_USERNAME || 'superadmin',
          passwordHash: hashPassword(defaultAdminPass)
        },
        stores: [],
        users: [],
        siteSettings: {}
      };
      fs.writeFileSync(DB_FILE, JSON.stringify(initialDB, null, 2), 'utf8');
      return initialDB;
    }

    const data = fs.readFileSync(DB_FILE, 'utf8');
    const db = JSON.parse(data);

    // Auto-migrate any plain text passwords to PBKDF2 hashes
    let migrated = false;
    if (db.adminCredentials && db.adminCredentials.passwordHash && !db.adminCredentials.passwordHash.includes(':')) {
      db.adminCredentials.passwordHash = hashPassword(db.adminCredentials.passwordHash);
      migrated = true;
    }
    if (Array.isArray(db.users)) {
      db.users.forEach(u => {
        if (u.password && !u.password.includes(':')) {
          u.password = hashPassword(u.password);
          migrated = true;
        }
      });
    }
    if (migrated) {
      fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf8');
    }

    return db;
  } catch (err) {
    return {
      adminCredentials: { username: 'superadmin', passwordHash: hashPassword('superadmin123') },
      stores: [],
      users: [],
      siteSettings: {}
    };
  }
}

function writeDB(db) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf8');
    return true;
  } catch (err) {
    return false;
  }
}

// Parse JSON request body safely
function parseJSONBody(req) {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        resolve({});
      }
    });
  });
}

// Enterprise Security Headers
function setSecurityHeaders(res) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
}

// Import Admin Template Generator Module
const { getAdminTemplateHTML } = require('./adminTemplate');

// ==========================================
// HTTP SERVER HANDLER
// ==========================================

const server = http.createServer(async (req, res) => {
  setSecurityHeaders(res);

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;
  const clientIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';

  // ------------------------------------------
  // 1. AUTH LOGIN ENDPOINT (Rate-Limited & Hashed)
  // ------------------------------------------
  if (pathname === '/api/auth/login' && method === 'POST') {
    if (isRateLimited(clientIP, 10)) {
      res.writeHead(429, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, message: 'Too many login attempts. Please wait 1 minute.' }));
      return;
    }

    const body = await parseJSONBody(req);
    const db = readDB();
    const username = sanitize((body.username || '').trim().toLowerCase());
    const password = body.password || '';

    // Check Super Admin Credentials
    if (username === db.adminCredentials.username.toLowerCase() && verifyPassword(password, db.adminCredentials.passwordHash)) {
      const token = generateToken({ id: 'admin-1', username: db.adminCredentials.username, role: 'admin' });
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        success: true,
        role: 'admin',
        token: token,
        message: 'Super Admin authenticated securely.'
      }));
      return;
    }

    // Check Regular User Credentials
    const user = (db.users || []).find(u => u.name.toLowerCase() === username || u.id.toLowerCase() === username);
    if (user) {
      if (user.status && user.status.includes('Blocked')) {
        res.writeHead(403, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Account is blocked by Super Admin.' }));
        return;
      }
      if (user.password && !verifyPassword(password, user.password)) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Invalid username or password.' }));
        return;
      }
      const token = generateToken({ id: user.id, username: user.name, role: 'user' });
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        success: true,
        role: 'user',
        token: token,
        user: { id: user.id, name: user.name, fullName: user.fullName || user.name, status: user.status }
      }));
      return;
    }

    res.writeHead(401, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: false, message: 'Invalid username or password.' }));
    return;
  }

  // ------------------------------------------
  // 2. AUTH SIGNUP ENDPOINT (Rate-Limited & Hashed)
  // ------------------------------------------
  if (pathname === '/api/auth/signup' && method === 'POST') {
    if (isRateLimited(clientIP, 10)) {
      res.writeHead(429, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, message: 'Too many signup requests.' }));
      return;
    }

    const body = await parseJSONBody(req);
    const db = readDB();
    const email = sanitize((body.email || '').trim());
    const fullName = sanitize((body.name || '').trim());
    const password = body.password || '';

    if (!email) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, message: 'Email address is required.' }));
      return;
    }

    let existing = (db.users || []).find(u => u.name.toLowerCase() === email.toLowerCase());
    if (existing) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, user: { id: existing.id, name: existing.name, fullName: existing.fullName } }));
      return;
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
      device: 'Web Browser',
      shoppingVisits: [],
      copiedCodes: [],
      orders: []
    };

    if (!db.users) db.users = [];
    db.users.unshift(newUser);
    writeDB(db);

    const token = generateToken({ id: newUser.id, username: newUser.name, role: 'user' });
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true, token, user: { id: newUser.id, name: newUser.name, fullName: newUser.fullName } }));
    return;
  }

  // ------------------------------------------
  // 3. DEDICATED PROTECTED /admin PAGE & TEMPLATE ROUTE
  // ------------------------------------------
  if ((pathname === '/admin' || pathname === '/admin/' || pathname === '/api/admin/template') && method === 'GET') {
    const authHeader = req.headers['authorization'];
    const payload = verifyToken(authHeader);
    if (!payload || payload.role !== 'admin') {
      res.writeHead(401, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>401 Unauthorized - Admin Access Required</title>
          <style>
            body { background-color: #0F172A; color: #F8FAFC; font-family: system-ui, -apple-system, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; text-align: center; }
            .card { background: #1E293B; border: 1px solid #334155; padding: 2.5rem; border-radius: 12px; max-width: 420px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5); }
            h1 { color: #EF4444; font-size: 1.5rem; margin-top: 0; }
            p { color: #94A3B8; font-size: 0.95rem; line-height: 1.5; }
            a { display: inline-block; margin-top: 1.2rem; background: #00E676; color: #000; padding: 0.75rem 1.5rem; text-decoration: none; font-weight: 800; border-radius: 8px; }
          </style>
        </head>
        <body>
          <div class="card">
            <h1>🔒 401 - Unauthorized Access</h1>
            <p>Access to the Super Admin Dashboard requires an active, authenticated Super Admin session token.</p>
            <a href="/">← Return to Main Site</a>
          </div>
        </body>
        </html>
      `);
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(getAdminTemplateHTML());
    return;
  }

  // ------------------------------------------
  // 4. STORES ENDPOINTS (Public GET, Protected POST/PUT/DELETE)
  // ------------------------------------------
  if (pathname === '/api/stores' && method === 'GET') {
    const db = readDB();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(db.stores || []));
    return;
  }

  if (pathname === '/api/stores' && method === 'POST') {
    const authHeader = req.headers['authorization'];
    const payload = verifyToken(authHeader);
    if (!payload || payload.role !== 'admin') {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, message: 'Unauthorized: Admin authorization required.' }));
      return;
    }

    const body = await parseJSONBody(req);
    const db = readDB();
    if (Array.isArray(body)) {
      db.stores = body;
      writeDB(db);
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true, count: (db.stores || []).length }));
    return;
  }

  // ------------------------------------------
  // 5. USERS ENDPOINTS (Protected GET, Sync POST)
  // ------------------------------------------
  if (pathname === '/api/users' && method === 'GET') {
    const authHeader = req.headers['authorization'];
    const payload = verifyToken(authHeader);
    if (!payload || payload.role !== 'admin') {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, message: 'Unauthorized: Admin authorization required.' }));
      return;
    }

    const db = readDB();
    const sanitizedUsers = (db.users || []).map(u => ({
      id: u.id,
      name: u.name,
      fullName: u.fullName,
      ip: u.ip,
      loginTime: u.loginTime,
      codesUsed: u.codesUsed,
      status: u.status,
      lastActive: u.lastActive,
      device: u.device,
      shoppingVisits: u.shoppingVisits || [],
      copiedCodes: u.copiedCodes || [],
      orders: u.orders || []
    }));

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(sanitizedUsers));
    return;
  }

  if (pathname === '/api/users/sync' && method === 'POST') {
    const body = await parseJSONBody(req);
    const db = readDB();

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
      writeDB(db);
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true }));
    return;
  }

  // ------------------------------------------
  // 6. SITE SETTINGS ENDPOINTS
  // ------------------------------------------
  if (pathname === '/api/settings' && method === 'GET') {
    const db = readDB();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(db.siteSettings || {}));
    return;
  }

  if (pathname === '/api/settings' && method === 'POST') {
    const authHeader = req.headers['authorization'];
    const payload = verifyToken(authHeader);
    if (!payload || payload.role !== 'admin') {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, message: 'Unauthorized: Admin authorization required.' }));
      return;
    }

    const body = await parseJSONBody(req);
    const db = readDB();
    db.siteSettings = body;
    writeDB(db);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true }));
    return;
  }

  // Static File Serving Handler for local development
  if (method === 'GET') {
    let filePath = pathname === '/' ? path.join(__dirname, 'index.html') : path.join(__dirname, pathname);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath);
      const mimeTypes = {
        '.html': 'text/html; charset=utf-8',
        '.js': 'text/javascript; charset=utf-8',
        '.css': 'text/css; charset=utf-8',
        '.json': 'application/json',
        '.png': 'image/png',
        '.svg': 'image/svg+xml'
      };
      const contentType = mimeTypes[ext] || 'text/plain';
      res.writeHead(200, { 'Content-Type': contentType });
      fs.createReadStream(filePath).pipe(res);
      return;
    }
  }

  // Default Fallback Response
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ success: false, message: 'Endpoint not found' }));
});

server.listen(PORT, () => {
  console.log(`🔒 Codes4U Enterprise Backend running on http://localhost:${PORT}`);
});
