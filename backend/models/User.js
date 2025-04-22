import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  pi_uid: { type: String, unique: true },
  username: String,
  flagged: { type: Boolean, default: false },
  lastLogin: Date
});

export default mongoose.model('User', userSchema);
