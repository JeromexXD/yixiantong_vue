import config from 'utils/config'
import { HTTP } from 'utils/http'

class ListModel extends HTTP {
  getListDatas (cityId, field) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: config.API.GET_LIST_DATAS,
        data: {
          cityId,
          field
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

export { ListModel }