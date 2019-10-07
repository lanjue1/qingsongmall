import {baseUrl} from "./baseurl.js"

export default function(options) {
  return new Promise((resolve, reject) =>{
      wx.request({
        url: baseUrl+ options.url,
        data: options.data,
        method:options.method || 'GET',
        
        success: function (res) {
          resolve(res)
        },
        fail:reject,
        complete: function(res) {},
      })
  })
}