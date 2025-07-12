// backend/routes/fraud.js
import express from 'express';

const router = express.Router();

router.get('/check', async (req, res) => {
  const uid = req.headers['x-pi-uid'];
  const authHeader = req.headers['authorization'];

  if (!uid || !authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(400).json({ error: 'Missing UID or Authorization' });
  }

  const accessToken = authHeader.replace('Bearer ', '');

  // TODO: validate token via Pi SDK (mock for now)
  console.log(`🔍 Fraud check for UID: ${uid}, Token: ${accessToken}`);

  // Simulate fraud detection logic
  const isFraud = false; // Replace with actual logic

  return res.json({ fraudStatus: isFraud ? 'fraudulent' : 'clear', uid });
});

export default router;