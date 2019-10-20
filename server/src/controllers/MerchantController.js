const { Merchant } = require('../models')
// Will be used when implementing the search function
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
  async getAllMerchants (req, res) {
    try {
      let merchants = null
      const search = req.query.search
      if (search) {
        merchants = await Merchant.findAll({
          where: {
            [Op.or]: [
              'merchantname', 'custnum', 'actnum', 'merchantstatus'
            ].map(key => ({
              [key]: {
                [Op.like]: `%${search}%`
              }
            }))
          }
        })
      } else {
        merchants = await Merchant.findAll({
          limit: 10
        })
      }
      res.send(merchants)
    } catch (err) {
      res.status(500).send({
        error: 'An error occured trying to fetch the merchants.'
      })
    }
  },
  async show (req, res) {
    try {
      const merchant = await Merchant.findByPk(req.params.viewmerchantId)
      res.send(merchant)
    } catch (err) {
      res.status(500).send({
        error: 'An error occured trying to fetch the merchant details.'
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
  },
  async put (req, res) {
    try {
      await Merchant.update(req.body, {
        where: {
          id: req.params.viewmerchantId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during Updating the merchant'
      })
    }
  }
}
