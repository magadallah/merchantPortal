const AuthenticationController = require('./controllers/AuthernticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicies')
module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
}
