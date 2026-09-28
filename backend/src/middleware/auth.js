import { verifyToken } from '../utils/jwt.js';

// Protects a route: requires `Authorization: Bearer <token>` and attaches
// req.businessId for downstream handlers to scope queries by.
export const requireAuth = (req, res, next) => {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;

  if (!token) {
    return res.status(401).json({ error: 'Missing or invalid Authorization header' });
  }

  try {
    const payload = verifyToken(token);
    req.businessId = payload.sub;
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};
