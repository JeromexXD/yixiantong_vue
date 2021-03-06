import config from 'utils/config'
import { HTTP } from 'utils/http'

class IndexModel extends HTTP {
  getHomeDatas (cityId) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: config.API.GET_HOME_DATAS,
        data: {
          cityId
        },
        success (data) {
          resolve({
            data,
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

export { IndexModel }