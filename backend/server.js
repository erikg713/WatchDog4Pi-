import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config.js';
import authRoutes from './routes/authRoutes.js';
import transactionRoutes from './routes/transactionRoutes.js';
import fraudRoutes from './routes/fraudRoutes.js';
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config.js';

import authRoutes from './routes/authRoutes.js';
import transactionRoutes from './routes/transactionRoutes.js';
import fraudRoutes from './routes/fraudRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/fraud', fraudRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/fraud', fraudRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server runnin on ${PORT}`));
