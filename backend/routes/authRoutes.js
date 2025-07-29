// backend/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const { verifyToken } = require('../controllers/authController');

/**
 * POST /api/auth/verify
 * Body: { accessToken, uid }
 */
router.post('/verify', verifyToken);

module.exports = router;