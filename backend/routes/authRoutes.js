import express from 'express';
import { verifyPiUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/verify', verifyPiUser); // POST /api/auth/verify

export default router;
