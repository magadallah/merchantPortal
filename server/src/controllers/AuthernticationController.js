const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  },
  async login (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      // console.log('user BEFORE', user)
      if (!user) {
        // console.log('!user')
        return res.status(403).send({
          error: 'The login information was not correct'
        })
      }
      // console.log('user AFTER', user)

      const isPasswordValid = await user.comparePassword(password)
      // console.log('isPasswordValid BEFORE : ', isPasswordValid)
      // console.log(isPasswordValid)
      // console.log(password, user.password)
      if (!isPasswordValid) {
        // console.log('isPasswordValid AFTER : ', isPasswordValid)
        return res.status(403).send({
          error: 'The login information is incorrect'
        })
      }

      const userJson = user.toJSON()

      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during login'
      })
    }
  }
}
