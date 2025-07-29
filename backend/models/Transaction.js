// backend/models/Transaction.js

const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  senderUid: {
    type: String,
    required: true,
  },
  receiverUid: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  purpose: {
    type: String,
    default: '',
  },
  isFlagged: {
    type: Boolean,
    default: false,
  },
  flaggedReason: {
    type: String,
    default: '',
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Transaction', transactionSchema);