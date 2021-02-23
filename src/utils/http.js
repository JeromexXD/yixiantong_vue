import axios from 'axios'
import qs from 'qs'

class HTTP {
  axiosPost (opt) {
    axios({
      url: opt.url,
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(opt.data)
    })
      .then((res) => {
        opt.success(res.data)
      })
      .catch((err) => {
        opt.error(err)
      })
  }
}

export { HTTP };