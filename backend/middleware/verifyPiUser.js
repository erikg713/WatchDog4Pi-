// backend/middleware/verifyPiUser.js const { verifyAccessToken } = require('../services/piAuthService'); const User = require('../models/User');

/**

Middleware to verify Pi user before accessing protected routes */ const verifyPiUser = async (req, res, next) => { const { accessToken, uid } = req.body;


if (!accessToken || !uid) { return res.status(401).json({ error: 'Access token and UID required' }); }

try { const userInfo = await verifyAccessToken(accessToken);

if (userInfo.uid !== uid) {
  return res.status(403).json({ error: 'Token does not match UID' });
}

const user = await User.findOne({ uid });
if (!user) {
  return res.status(404).json({ error: 'User not found' });
}

req.user = user;
next();

} catch (err) { res.status(403).json({ error: 'Unauthorized', detail: err.message }); } };

module.exports = verifyPiUser;
// middleware/verifyPiUser.js

const piAuthService = require('../services/piAuthService');

module.exports = async (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ error: 'Missing Pi Auth Token' });

  try {
    const user = await piAuthService.verify(token);
    req.user = user;
    next();
  } catch (err) {
    res.status(403).json({ error: 'Invalid Pi user' });
  }
};

