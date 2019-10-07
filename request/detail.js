import request from "./config.js"

export function getGoodsdetail(iid){
   return  request({
    url: '/detail',
    data: {
            iid 
            
             },
  })
}
  export function getRecommends() {
    return request({
      url: '/recommend'
    })
  }
