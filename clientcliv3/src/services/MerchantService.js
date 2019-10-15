import Api from '@/services/Api'

export default {
  getAllMerchants () {
    return Api().post('merchants')
  },
  postMerchant (merchant) {
    return Api().post('merchantscreate', merchant)
  },
  show (viewmerchantId) {
    return Api().post(`merchants/${viewmerchantId}`)
  },
  put (merchant) {
    return Api().put(`merchants/${merchant.id}`, merchant)
  }
}
