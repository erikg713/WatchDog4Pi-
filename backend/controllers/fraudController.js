import Transaction from '../models/Transaction.js';

export const checkFraud = async (req, res) => {
  try {
    const flagged = await Transaction.find({ isFlagged: true });
    res.json({ count: flagged.length, flagged });
  } catch (err) {
    res.status(500).json({ error: 'Error checking fraud', details: err.message });
  }
};
