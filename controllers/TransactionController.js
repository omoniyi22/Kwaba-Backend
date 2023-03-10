var crypto = require('crypto');
var secret = process.env.PAYSTACK_SECRET_KEY;


const TransactionController = {
  async webHook(req, res) {

    console.log({ there: "there", req })
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

          let status = data.status
          let paystackId = data.id
          let reference = data.reference
          let amount = data.amount
          let method = data.channel
          let paidAt = data.paid_at

        }
      }
      res.send(200);
    } catch (error) {
      res.status(400).json({
        msg: error,
      });
    }
  },

  async getTransactions(req, res) {

  }

}

module.exports = TransactionController;