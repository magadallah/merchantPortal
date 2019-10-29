const AuthenticationController = require('./controllers/AuthernticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicies')
const MerchantController = require('./controllers/MerchantController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.get('/merchants',
    MerchantController.getAllMerchants)

  app.post('/merchantscreate',
    MerchantController.postMerchant)

  app.post('/merchants/:viewmerchantId',
    MerchantController.show)

  app.put('/merchants/:viewmerchantId',
    MerchantController.put)

  app.delete('/merchants/:viewmerchantId',
    MerchantController.delete)
}
