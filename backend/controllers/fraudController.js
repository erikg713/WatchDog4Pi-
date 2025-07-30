// controllers/fraudController.js

const FraudService = require('../services/fraudDetection');
const User = require('../models/User');

exports.scanMessage = async (req, res) => {
  const { message, userId } = req.body;

  if (!message || !userId) {
    return res.status(400).json({ error: 'Missing message or userId' });
  }

  const { flagged, reasons } = await FraudService.analyze(message);

  if (flagged) {
    // optionally update user risk score
    await User.findByIdAndUpdate(userId, { $inc: { fraudScore: 1 } });

    return res.status(200).json({
      flagged: true,
      reasons,
      message: 'Potential scam/fraud detected.'
    });
  }

  return res.status(200).json({ flagged: false, message: 'Clean' });
};