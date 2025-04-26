import express from 'express';
import { piAuthMiddleware } from '../auth/piVerify.js';

const router = express.Router();

router.get('/api/fraud/check', piAuthMiddleware(), async (req, res) => {
  res.json({ ok: true, message: 'Fraud check passed', user: req.piUser });
});

export default router;
