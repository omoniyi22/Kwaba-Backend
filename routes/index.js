const ProfileRoutes = require('./profile')
const TransactionRoutes = require('./transaction')

const Routes = async router => {
  await ProfileRoutes(router)
  await TransactionRoutes(router)
}

module.exports = Routes