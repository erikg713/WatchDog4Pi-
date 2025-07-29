// backend/models/Alert.js

const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  userUid: {
    type: String,
    required: true,
  },
  alertType: {
    type: String,
    enum: ['phishing', 'scam', 'suspicious'],
    required: true,
  },
  severity: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  },
  message: {
    type: String,
    required: true,
  },
  resolved: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Alert', alertSchema);