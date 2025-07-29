// backend/controllers/authController.js

const Pi = require('pi-sdk'); // Pi Network SDK
const User = require('../models/User');
require('dotenv').config();

const pi = new Pi({
  clientKey: process.env.PI_CLIENT_KEY,
  serverKey: process.env.PI_SERVER_KEY,
  appId: process.env.PI_APP_ID,
});

/**
 * Verifies Pi user access token and logs user into the system.
 * Stores new users or updates existing user info.
 */
const verifyToken = async (req, res) => {
  const { accessToken, uid } = req.body;

  if (!accessToken || !uid) {
    return res.status(400).json({ error: 'Access token and UID required' });
  }

  try {
    const userInfo = await pi.verifyAccessToken(accessToken);

    if (userInfo.uid !== uid) {
      return res.status(401).json({ error: 'Token UID mismatch' });
    }

    let user = await User.findOne({ uid: userInfo.uid });

    if (!user) {
      user = new User({
        uid: userInfo.uid,
        username: userInfo.username,
        createdAt: new Date(),
      });
      await user.save();
    }

    res.json({ message: 'User verified', user });
  } catch (error) {
    res.status(401).json({ error: 'Invalid Pi access token' });
  }
};

module.exports = { verifyToken };