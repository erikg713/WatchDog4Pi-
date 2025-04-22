import express from 'express';
import { recordTransaction } from '../controllers/transactionController.js';

const router = express.Router();

router.post('/', recordTransaction); // POST /api/transactions

export default router;
