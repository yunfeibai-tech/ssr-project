/**
 * @Author: yunfei_bai
 * @Date: 2018/7/11 16:04
 * @Description:
 * */

import * as axios from 'axios'
let options = {}
if (process.server) {
  options.baseURL =`http://127.0.0.1:3000`
  // options.baseURL = `http://${process.env.HOST || 'http://127.0.0.1:3000'}:${process.env.PORT || 3000}`
}
export default axios.create(options)
