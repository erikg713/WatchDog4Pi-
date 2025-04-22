import express from 'express';
import { checkFraud } from '../controllers/fraudController.js';

const router = express.Router();

router.post('/check', checkFraud); // POST /api/fraud/check

export default router;
