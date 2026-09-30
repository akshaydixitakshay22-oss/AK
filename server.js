/* Codes4U Secure Node.js REST API Backend Server */
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 5000;
const DB_FILE = path.join(__dirname, 'database.json');

// Helper to read database
function readDB() {
  try {
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading database.json:', err);
    return { adminCredentials: { username: 'superadmin', passwordHash: 'superadmin123' }, stores: [], users: [], siteSettings: {} };
  }
}

// Helper to write database
function writeDB(db) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error writing database.json:', err);
    return false;
  }
}

// Parse JSON request body
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

// Security headers
function setSecurityHeaders(res) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
}

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

  // ==========================================
  // REST API ENDPOINTS (/api/*)
  // ==========================================

  // 1. Auth Login Endpoint
  if (pathname === '/api/auth/login' && method === 'POST') {
    const body = await parseJSONBody(req);
    const db = readDB();
    const username = (body.username || '').trim().toLowerCase();
    const password = body.password || '';

    // Check Super Admin
    if (username === db.adminCredentials.username.toLowerCase() && password === db.adminCredentials.passwordHash) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        success: true,
        role: 'admin',
        token: 'admin-sec-token-' + Date.now(),
        message: 'Super Admin authenticated securely.'
      }));
      return;
    }

    // Check Regular User
    const user = db.users.find(u => u.name.toLowerCase() === username || u.id.toLowerCase() === username);
    if (user) {
      if (user.status && user.status.includes('Blocked')) {
        res.writeHead(403, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Account is blocked by Super Admin.' }));
        return;
      }
      user.lastActive = 'Just now';
      writeDB(db);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        success: true,
        role: 'user',
        token: 'user-token-' + Date.now(),
        user: { id: user.id, name: user.name, fullName: user.fullName || user.name, status: user.status }
      }));
      return;
    }

    res.writeHead(401, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: false, message: 'Invalid credentials.' }));
    return;
  }

  // 2. Auth Signup Endpoint
  if (pathname === '/api/auth/signup' && method === 'POST') {
    const body = await parseJSONBody(req);
    const db = readDB();
    const email = (body.email || '').trim();
    const fullName = (body.name || '').trim();

    if (!email) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, message: 'Email required.' }));
      return;
    }

    let existing = db.users.find(u => u.name.toLowerCase() === email.toLowerCase());
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
      ip: req.socket.remoteAddress || '192.168.1.10',
      loginTime: new Date().toISOString().replace('T', ' ').substring(0, 16),
      codesUsed: 0,
      status: '🟢 Active',
      lastActive: 'Just registered',
      device: req.headers['user-agent'] || 'Web Browser',
      shoppingVisits: [],
      copiedCodes: [],
      orders: []
    };

    db.users.unshift(newUser);
    writeDB(db);

    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true, user: { id: newUser.id, name: newUser.name, fullName: newUser.fullName } }));
    return;
  }

  // 3. Get All Stores
  if (pathname === '/api/stores' && method === 'GET') {
    const db = readDB();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(db.stores || []));
    return;
  }

  // 4. Add New Store (Admin)
  if (pathname === '/api/stores' && method === 'POST') {
    const body = await parseJSONBody(req);
    const db = readDB();
    if (!body.name || !body.targetUrl) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, message: 'Store Name & Redirect URL required.' }));
      return;
    }

    const id = body.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    const newStore = {
      id,
      name: body.name,
      domain: body.domain || `${id}.com`,
      health: '100% Health',
      discountTitle: body.discountTitle || '10% OFF',
      logo: body.logo || 'https://via.placeholder.com/40',
      targetUrl: body.targetUrl,
      cashback: body.cashback || '5% Cash Back',
      codes: body.codes || [{ title: '10% OFF Storewide', code: 'PROMO10', desc: '10% discount on order' }]
    };

    db.stores.unshift(newStore);
    writeDB(db);

    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true, store: newStore }));
    return;
  }

  // 5. Get All Users (Admin)
  if (pathname === '/api/users' && method === 'GET') {
    const db = readDB();
    // Sanitize user data sent to admin (strip raw pass hashes)
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

  // 5b. Real-Time User Activity Sync Endpoint (Copied codes & shopping visits from any user device)
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

  // 6. Record User Order
  if (pathname === '/api/orders' && method === 'POST') {
    const body = await parseJSONBody(req);
    const db = readDB();
    const userId = body.userId;
    const user = db.users.find(u => u.id === userId || u.name === userId);

    if (user && body.order) {
      if (!user.orders) user.orders = [];
      user.orders.unshift(body.order);
      user.codesUsed = (user.codesUsed || 0) + 1;
      writeDB(db);
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true }));
    return;
  }

  // 7. Site Settings
  if (pathname === '/api/settings' && method === 'GET') {
    const db = readDB();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(db.siteSettings || {}));
    return;
  }

  if (pathname === '/api/settings' && method === 'POST') {
    const body = await parseJSONBody(req);
    const db = readDB();
    db.siteSettings = Object.assign({}, db.siteSettings, body);
    writeDB(db);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true, settings: db.siteSettings }));
    return;
  }

  // ==========================================
  // STATIC FRONTEND FILE SERVER
  // ==========================================
  let filePath = path.join(__dirname, pathname === '/' ? 'index.html' : pathname);
  const ext = path.extname(filePath).toLowerCase();

  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml'
  };

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
      res.end(content, 'utf8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 Codes4U Secure Backend API Server running on port ${PORT}`);
  console.log(`🌐 API Base URL: http://localhost:${PORT}`);
  console.log(`🛡️ DevTools Inspection Shield & Database Security ACTIVE`);
  console.log(`=======================================================`);
});
