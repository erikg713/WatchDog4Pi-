import mongoose from 'mongoose';

const fraudReportSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    fraudScore: { type: Number, required: true },
    reason: { type: String, required: true },
    status: { type: String, enum: ['under_review', 'flagged', 'resolved'], default: 'under_review' },
  },
  {
    timestamps: true,
  }
);

const FraudReport = mongoose.model('FraudReport', fraudReportSchema);
export default FraudReport;
