/**
 * @Author: yunfei_bai
 * @Date: 2018/7/16 10:06
 * @Description:
 * */
import  Cookie from 'js-cookie'

export default {
  getCookieInServer(req){
    let service_cookie = {};

    req&&req.headers&&req.headers.cookie.split(';').forEach(function (val) {
      let parts = val.split('=')
      service_cookie[parts[0].trim()] = (parts[1] || '').trim();

    })
    return service_cookie
  },
  getcookiesInClient:function (key) {
    return Cookie.get(key) ? Cookie.get(key) : ''
  }
}
