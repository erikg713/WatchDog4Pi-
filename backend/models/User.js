import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    piUid: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    fraudFlag: { type: Boolean, default: false },
    lastTransactionDate: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;
