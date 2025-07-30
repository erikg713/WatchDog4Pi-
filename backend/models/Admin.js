import express from 'express';
import Admin from '../models/Admin.js';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

const router = express.Router();

// Admin login (basic demo)
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (!admin || !(await bcrypt.compare(password, admin.passwordHash))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  res.json({ success: true, admin: { username, role: admin.role } });
});

// Flag user manually
router.post('/flag-user', async (req, res) => {
  const { piId } = req.body;
  const user = await User.findOneAndUpdate({ piId }, { isFlagged: true }, { new: true });
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

export default router;