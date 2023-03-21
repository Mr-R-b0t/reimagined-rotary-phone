import http from '../http-common'

class CheckOutDataService {
  getAll () {
    return http.get('/checkout')
  }

  create (data) {
    return http.post('/checkout', data)
  }

  get (id) {
    return http.get(`/checkout/${id}`)
  }

  update (id, data) {
    return http.put(`/checkout/${id}`, data)
  }

  delete (id) {
    return http.delete(`/checkout/${id}`)
  }
}
export default new CheckOutDataService()
