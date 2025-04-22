import Transaction from '../models/Transaction.js';
import { isTransactionSuspicious } from '../services/fraudDetection.js';

export const recordTransaction = async (req, res) => {
  const { user, txId, amount, vendor } = req.body;
  const isFlagged = isTransactionSuspicious({ amount, vendor });

  const newTx = new Transaction({
    user,
    txId,
    amount,
    vendor,
    isFlagged,
    date: new Date()
  });

  try {
    await newTx.save();
    res.json({ success: true, isFlagged });
  } catch (err) {
    res.status(500).json({ error: 'Transaction failed', details: err.message });
  }
};
