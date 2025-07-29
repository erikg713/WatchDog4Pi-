const PiNetwork = require('pi-backend')
const pi = new PiNetwork(process.env.PI_API_KEY, process.env.PI_PRIVATE_SEED)

async function createPayment(userUid, amount, memo) {
  const paymentData = {
    amount,
    memo,
    metadata: { purpose: 'fraud-detection' },
    uid: userUid
  }
  const paymentId = await pi.createPayment(paymentData)
  return paymentId
}
module.exports = { createPayment }

// backend/services/piAuthService.js

const Pi = require('pi-sdk');
const config = require('../config');

const pi = new Pi({
  clientKey: config.pi.clientKey,
  serverKey: config.pi.serverKey,
  appId: config.pi.appId,
});

/**
 * Verifies Pi user access token.
 * @param {string} token - Pi user access token
 * @returns {Promise<Object>} - Pi user info
 */
const verifyAccessToken = async (token) => {
  try {
    const userInfo = await pi.verifyAccessToken(token);
    return userInfo;
  } catch (err) {
    throw new Error('Token verification failed: ' + err.message);
  }
};

module.exports = { verifyAccessToken };
