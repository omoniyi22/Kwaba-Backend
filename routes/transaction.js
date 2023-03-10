const TransactionController = require("./../controllers/TransactionController");
const { Auth } = require("./../middlewares/Auth");

const TransactionRoutes = async (router) => {
  await router
    .route("/transactions/paystack_webhook")
    .post(TransactionController.webHook);

  await
    router.route("/transactions/:email")
      .get(Auth.verifyToken, TransactionController.getAllTransactions);
};

module.exports = TransactionRoutes;