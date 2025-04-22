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
