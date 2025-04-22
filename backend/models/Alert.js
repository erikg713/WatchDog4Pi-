const mongoose = require('mongoose')
const AlertSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  transaction: { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' },
  message: String,
  createdAt: { type: Date, default: Date.now }
})
module.exports = mongoose.model('Alert', AlertSchema)

