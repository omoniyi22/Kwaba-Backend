const { model, Schema } = require('mongoose')

const salesModel = new Schema({
  paystackId: {
    type: Number,
    required: true,
  },
  
  reference: {
    type: String
  },

  amount: {
    type: Number
  },

  method: {
    type: String
  },

  paidAt: {
    type: String
  }

}, { timestamps: true })

module.exports = model("sales", salesModel)