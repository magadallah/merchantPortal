import Api from '@/services/Api'

export default {
  getAllMerchants () {
    return Api().post('merchants')
  },
  postMerchant (merchant) {
    return Api().post('merchantscreate', merchant)
  }
}
