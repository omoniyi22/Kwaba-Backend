const TransactionController = require("./../controllers/TransactionController");
const { Auth } = require("./../middlewares/Auth");

const TransactionRoutes = async (router) => {
  await router
    .route("/transaction")
    .post(Auth.verifyToken, TransactionController.webHook);

  await router.route("/transaction/paystack_webhook").get(TransactionController.getTransactions);
};

module.exports = TransactionRoutes;
