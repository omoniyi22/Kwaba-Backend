var crypto = require('crypto');
var secret = process.env.PAYSTACK_SECRET_KEY;
var Transaction = require('./../models/transaction')

const TransactionController = {
  async webHook(req, res) {

    //validate event
    try {
      const hash = crypto.createHmac('sha512', secret).update(JSON.stringify(req.body)).digest('hex');
      if (hash == req.headers['x-paystack-signature']) {
        // Retrieve the request's body
        const event = req.body;
        // Do something with event  
        if (event && event.event && event.data) {
          let data = event.data

          console.log({ data: data.customer })

          let transactionData = {
            status: data.status,
            paystackId: data.id,
            reference: data.reference,
            amount: data.amount,
            method: data.channel,
            paidAt: data.paid_at,
            email: data.customer.email,
            name: data.customer.first_name + " " + data.customer.last_name,
          }

          let newTransaction = new Transaction(transactionData);
          let savedTransaction = await newTransaction.save();
          console.log({ savedTransaction })
          res.status(201).json({
            msg: `Project created successfully`,
            data: savedTransaction,
          });
        }

      }
    } catch (error) {
      res.status(500).send({
        msg: "An error occured",
        err: error,
      });
    }
  },

  async getTransactions(req, res) {

  }

}

module.exports = TransactionController;