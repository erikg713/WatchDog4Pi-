import express from 'express';
import { recordTransaction } from '../controllers/transactionController.js';

const router = express.Router();

router.post('/', recordTransaction); // POST /api/transactions

export default router;
const express = require('express')
const router = express.Router()
const Transaction = require('../models/Transaction')

router.post('/', async (req, res) => {
  const { userId, amount, memo } = req.body
  const tx = await Transaction.create({ user: userId, amount, memo })
  res.json(tx)
})

router.get('/:id', async (req, res) => {
  const tx = await Transaction.findById(req.params.id)
  res.json(tx)
})

module.exports = router
