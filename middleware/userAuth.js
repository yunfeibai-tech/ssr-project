/**
 * @Author: yunfei_bai
 * @Date: 2018/7/16 9:47
 * @Description:
 * */
import uitls from '~/utils/utils'
export  default function ({ route,req,res,redirect}) {
  let isClient = process.client;
  let isServer = process.server;
  var redirectURL="/login";
  var token;
  console.log(isClient,isServer)
  if(isServer){
    let cookies = uitls.getCookieInServer('token')
    console.log(cookies);
  }
  if (!token) {
    // redirect(redirectURL)
  }
}
