/* Codes4U Vercel Serverless API Handler */
const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, '..', 'database.json');

function readDB() {
  try {
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return {
      adminCredentials: { username: 'superadmin', passwordHash: 'superadmin123' },
      stores: [],
      users: [],
      siteSettings: {}
    };
  }
}

module.exports = (req, res) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  const url = req.url || '';
  const pathname = url.split('?')[0];

  // 1. Auth Login Endpoint
  if (pathname === '/api/auth/login' && req.method === 'POST') {
    const body = req.body || {};
    const db = readDB();
    const username = (body.username || '').trim().toLowerCase();
    const password = body.password || '';

    if (username === db.adminCredentials.username.toLowerCase() && password === db.adminCredentials.passwordHash) {
      res.setHeader('Content-Type', 'application/json');
      return res.status(200).send(JSON.stringify({
        success: true,
        role: 'admin',
        token: 'admin-sec-token-' + Date.now(),
        message: 'Super Admin authenticated securely.'
      }));
    }

    const user = (db.users || []).find(u => u.name.toLowerCase() === username || u.id.toLowerCase() === username);
    if (user) {
      if (user.status && user.status.includes('Blocked')) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(403).send(JSON.stringify({ success: false, message: 'Account is blocked by Super Admin.' }));
      }
      res.setHeader('Content-Type', 'application/json');
      return res.status(200).send(JSON.stringify({
        success: true,
        role: 'user',
        token: 'user-token-' + Date.now(),
        user: { id: user.id, name: user.name, fullName: user.fullName || user.name, status: user.status }
      }));
    }

    res.setHeader('Content-Type', 'application/json');
    return res.status(401).send(JSON.stringify({ success: false, message: 'Invalid credentials.' }));
  }

  // 2. Auth Signup Endpoint
  if (pathname === '/api/auth/signup' && req.method === 'POST') {
    const body = req.body || {};
    const db = readDB();
    const email = (body.email || '').trim();
    const fullName = (body.name || '').trim();

    if (!email) {
      res.setHeader('Content-Type', 'application/json');
      return res.status(400).send(JSON.stringify({ success: false, message: 'Email required.' }));
    }

    let existing = (db.users || []).find(u => u.name.toLowerCase() === email.toLowerCase());
    if (existing) {
      res.setHeader('Content-Type', 'application/json');
      return res.status(200).send(JSON.stringify({ success: true, user: { id: existing.id, name: existing.name, fullName: existing.fullName } }));
    }

    const newId = 'USR-' + Math.floor(1000 + Math.random() * 9000);
    const newUser = {
      id: newId,
      name: email,
      fullName: fullName || email.split('@')[0],
      loginTime: new Date().toISOString().replace('T', ' ').substring(0, 16),
      codesUsed: 0,
      status: '🟢 Active',
      lastActive: 'Just registered',
      device: 'Vercel Web App',
      shoppingVisits: [],
      copiedCodes: [],
      orders: []
    };

    res.setHeader('Content-Type', 'application/json');
    return res.status(201).send(JSON.stringify({ success: true, user: { id: newUser.id, name: newUser.name, fullName: newUser.fullName } }));
  }

  // 3. Get All Stores
  if (pathname === '/api/stores' && req.method === 'GET') {
    const db = readDB();
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).send(JSON.stringify(db.stores || []));
  }

  // 4. Save/Add Store
  if (pathname === '/api/stores' && req.method === 'POST') {
    const body = req.body || {};
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).send(JSON.stringify({ success: true, data: body }));
  }

  // 5. Get All Users
  if (pathname === '/api/users' && req.method === 'GET') {
    const db = readDB();
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).send(JSON.stringify(db.users || []));
  }

  // 6. Get Site Settings
  if (pathname === '/api/settings' && req.method === 'GET') {
    const db = readDB();
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).send(JSON.stringify(db.siteSettings || {}));
  }

  res.setHeader('Content-Type', 'application/json');
  return res.status(200).send(JSON.stringify({ success: true, message: 'Codes4U Vercel API Ready' }));
};
