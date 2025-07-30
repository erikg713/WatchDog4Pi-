// backend/middleware/requireAdmin.js
import Admin from '../models/Admin.js';

const requireAdmin = async (req, res, next) => {
  const { username } = req.body;

  const admin = await Admin.findOne({ username });
  if (!admin) {
    return res.status(403).json({ error: 'Admin access required' });
  }

  req.admin = admin;
  next();
};

export default requireAdmin;