// backend/controllers/authController.js

const Pi = require('pi-sdk');
const User = require('../models/User');
require('dotenv').config();

const pi = new Pi({
  clientKey: process.env.PI_CLIENT_KEY,
  serverKey: process.env.PI_SERVER_KEY,
  appId: process.env.PI_APP_ID,
});

/**
 * Verifies Pi user token and creates or updates user in DB.
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
        trustScore: 100,
        flagged: false,
      });
    } else {
      user.username = userInfo.username;
    }

    await user.save();

    res.status(200).json({ message: 'User verified', user });
  } catch (err) {
    res.status(401).json({ error: 'Invalid Pi access token', detail: err.message });
  }
};

module.exports = { verifyToken };