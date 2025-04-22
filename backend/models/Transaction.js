const mongoose = require('mongoose')
const TransactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: Number,
  memo: String,
  paymentId: String,
  txid: String,
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
})
module.exports = mongoose.model('Transaction', TransactionSchema)


import mongoose from 'mongoose';

const txSchema = new mongoose.Schema({
  user: String,
  txId: String,
  amount: Number,
  vendor: String,
  isFlagged: Boolean,
  date: Date
});

export default mongoose.model('Transaction', txSchema);
