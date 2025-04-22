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
