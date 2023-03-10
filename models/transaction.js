const { model, Schema } = require('mongoose')

const transactionModel = new Schema({

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  reference: {
    type: String,
    required: true
  },

  amount: {
    type: Number,
    required: true
  },

  method: {
    type: String,
    required: true
  },

  paidAt: {
    type: String,
    required: true
  }

}, { timestamps: true })

module.exports = model("transaction", transactionModel)