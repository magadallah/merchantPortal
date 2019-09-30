const AuthenticationController = require('./controllers/AuthernticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicies')
const MerchantController = require('./controllers/MerchantController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.post('/merchants',
    MerchantController.getAllMerchants)

  app.post('/merchantscreate',
    MerchantController.postMerchant)
}
