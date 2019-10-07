import request from "./config.js"

export function getCategory(){
  return request({
    url:'/category',
  })
}
// 分类子类的具体数据是通过拿到各自的menu的maiKey来获取的
//比如：http://123.207.32.32:8000/api/v1/subcategory?maitKey=605
export function getCategorySub(maitKey){
  return request({
    url: '/subcategory',
    data: {
      maitKey
    }
  })
}

//获取推荐下 的其他数据
export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    data: {
      miniWallkey,
      type
    }
  })
}