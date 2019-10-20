import Api from '@/services/Api'

export default {
  getAllMerchants (search) {
    return Api().get('merchants', {
      params: {
        search: search
      }
    })
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
