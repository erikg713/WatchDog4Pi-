import express from 'express';
import { piAuthMiddleware } from '../auth/piVerify.js';

const router = express.Router();

router.get('/api/admin/stats', piAuthMiddleware('admin'), (req, res) => {
  res.json({ ok: true, message: 'Admin access granted', user: req.piUser });
});

export default router;
