const express = require('express');
const mongoose = require('mongoose');
const PiSDK = require('pi-sdk');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Pi SDK authentication route
app.post('/auth', async (req, res) => {
    const { piAuthToken } = req.body;
    
    // Validate Pi Token with Pi SDK
    try {
        const user = await PiSDK.verifyUser(piAuthToken);
        res.json({ success: true, user });
    } catch (err) {
        res.status(400).json({ success: false, message: 'Invalid Pi token' });
    }
});

// Placeholder route for transactions and fraud detection
app.post('/transaction', (req, res) => {
    // Transaction processing logic here
    res.json({ success: true, message: 'Transaction processed' });
});

app.listen(port, () => {
    console.log(`PiGuard backend running at http://localhost:${port}`);
});
