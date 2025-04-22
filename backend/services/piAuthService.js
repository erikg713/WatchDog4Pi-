const Pi = require('pi-network');
const pi = new Pi(process.env.PI_API_KEY, process.env.PI_PRIVATE_SEED);

// Example: Create a payment
async function createPayment(userUid, amount, memo) {
  const payment = await pi.createPayment({
    amount,
    memo,
    metadata: { purpose: 'fraud-detection' },
    uid: userUid,
  });
  return payment.identifier; // Store this in DB
}
module.exports = { createPayment };

