const TransactionController = require("./../controllers/TransactionController");
const { Auth } = require("./../middlewares/Auth");

const TransactionRoutes = async (router) => {
  await router
    .route("/transactions/paystack_webhook")
    .post(TransactionController.webHook);

  await router.route("/transactions").get(TransactionController.getTransactions);
};

module.exports = TransactionRoutes;