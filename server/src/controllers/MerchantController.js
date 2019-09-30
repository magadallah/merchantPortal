const { Merchant } = require('../models')

module.exports = {
  async getAllMerchants (req, res) {
    try {
      const merchants = await Merchant.findAll({
        limit: 10
      })
      res.send(merchants)
    } catch (err) {
      res.status(500).send({
        error: 'An error occured trying to fetch the merchants.'
      })
    }
  },
  async postMerchant (req, res) {
    try {
      const merchant = await Merchant.create(req.body)
      res.send(merchant)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during creating the merchant'
      })
    }
  }
}
