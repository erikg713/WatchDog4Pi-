import mongoose from 'mongoose';

const FraudReportSchema = new mongoose.Schema({
  reporter: { type: String, required: true },
  suspect: { type: String, required: true },
  reason: { type: String, required: true },
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'resolved'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('FraudReport', FraudReportSchema);