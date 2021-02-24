import config from 'utils/config'
import { HTTP } from 'utils/http'

class DetailModel extends HTTP {
  getDetailDatas (field, id) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: config.API.GET_DETAIL,
        data: {
          field,
          id
        },
        success (res) {
          resolve({
            res,
            status: 0
          })
        },
        error (err) {
          reject({
            err,
            status: -1
          })
        }
      })
    })
  }
}

export { DetailModel }