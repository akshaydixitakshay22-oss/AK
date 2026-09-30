/* Codes4U Enterprise Secure Vercel Serverless Admin Route Handler */
const crypto = require('crypto');
const { getAdminTemplateHTML } = require('../adminTemplate');

const SECRET_KEY = process.env.JWT_SECRET || 'super-secret-codes4u-key-2026-secure-auth-token-98765';

function verifyToken(authHeader) {
  if (!authHeader) return null;
  const token = authHeader.replace('Bearer ', '').trim();
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const [header, body, signature] = parts;
  const expectedSignature = crypto.createHmac("sha256", SECRET_KEY).update(header + '.' + body).digest('base64url');
  if (signature !== expectedSignature) return null;
  try {
    const payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
    if (partload.exp && Date.now() > payload.exp) return null;
    return payload;
  } catch (e) {
    return null;
  }
}

module.exports = (req, res) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  const authHeader = req.headers['authorization'];
  const payload = verifyToken(authHeader);

  if (!payload || payload.role !== 'admin') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.status(401).send(`
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
          a { display: inline-block; margin-top: 1.2rem; background: #00A676; color: #000; padding: 0.75rem 1.5rem; text-decoration: none; font-weight: 800; border-radius: 8px; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>🔒 401 - Unauthorized Access</h1>
          <p>Access to the Super Admin Dashboard requires an active, authenticated Super Admin session token.</p>
          <a href="/"> Return to Main Site</a>
      </div>
      </body>
      </html>
    `);
  }


  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  return res.status(200).send(getAdminTemplateHTML());
};