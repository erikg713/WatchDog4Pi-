import express from 'express';
import Transaction from '../models/Transaction.js';

const router = express.Router();

// Create a new transaction
router.post('/', async (req, res) => {
  const { user, amount, memo, paymentId, txid, vendor } = req.body;

  try {
    const newTransaction = new Transaction({
      user,
      amount,
      memo,
      paymentId,
      txid,
      vendor,
    });

    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(500).json({ message: 'Error creating transaction', error: err });
  }
});

// Get all transactions
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching transactions', error: err });
  }
});
import verifyPiToken from '../middleware/verifyPiToken.js';

router.post('/', verifyPiToken, async (req, res) => {
  // req.user is now populated
  const { sender, receiver, amount, message } = req.body;
  const tx = await Transaction.create({
    sender,
    receiver,
    amount,
    message,
  });
  res.status(201).json(tx);
});

// Get a single transaction by ID
router.get('/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching transaction', error: err });
  }
});

// Update a transaction (e.g., flagging for fraud)
router.put('/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ message: 'Error updating transaction', error: err });
  }
});

export default router;
