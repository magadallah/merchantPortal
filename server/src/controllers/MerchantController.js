const { Merchant } = require('../models')
// Will be used when implementing the search function
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
  // Getting merchants and filtering through search
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
  // Fetching only one merchant details by id
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
  // Deleting merchant by id
  async delete (req, res) {
    try {
      // let delMer = null
      const id = req.params.viewmerchantId
      if (id) {
        await Merchant
          .destroy({
            where: {
              id: id
            }
          })
          .then(deletedMerchant => {
            if (deletedMerchant === 0) {
              res.send('Merchant doesnt exist')
            } else {
              res.json(deletedMerchant)
            }
          })
      } else {
        res.send('The merchant doesnt exist')
      }
      // res.send(body)
    } catch (err) {
      res.status(500).send({
        error: 'An error occured trying to delete the merchant.'
      })
    }
  },
  // Creating merchant
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
  // Updating merchant
  async put (req, res) {
    try {
      const id = req.params.viewmerchantId
      await Merchant.update(req.body, {
        where: {
          id: id
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
