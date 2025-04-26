import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config.js';
import authRoutes from './routes/authRoutes.js';
import transactionRoutes from './routes/transactionRoutes.js';
import fraudRoutes from './routes/fraudRoutes.js';
import adminRoutes from './routes/admin.js'; // if using Pi role middleware
import User from './models/User.js';
import Transaction from './models/Transaction.js';
import FraudReport from './models/FraudReport.js';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config.js';
import transactionRoutes from './routes/transactionRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Use the transaction routes
app.use('/api/transactions', transactionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// Load .env and connect DB
dotenv.config();
connectDB();

// Init app
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/fraud', fraudRoutes);
app.use('/api/admin', adminRoutes); // optional

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
