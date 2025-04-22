import Transaction from '../models/Transaction.js';

export const checkFraud = async (req, res) => {
  try {
    const flagged = await Transaction.find({ isFlagged: true });
    res.json({ count: flagged.length, flagged });
  } catch (err) {
    res.status(500).json({ error: 'Error checking fraud', details: err.message });
  }
};
const ADMIN_UIDS = ['your_pi_uid_here'];

export const checkFraud = async (req, res) => {
  const requester = req.headers['x-pi-uid'];

  if (!ADMIN_UIDS.includes(requester)) {
    return res.status(403).json({ error: 'Unauthorized access' });
  }

  try {
    const flagged = await Transaction.find({ isFlagged: true });
    res.json({ count: flagged.length, flagged });
  } catch (err) {
    res.status(500).json({ error: 'Error checking fraud', details: err.message });
  }
};
