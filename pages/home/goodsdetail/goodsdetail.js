// pages/home/goodsdetail/goodsdetail.js
import { getGoodsdetail,
              getRecommends,
            } from '../../../request/detail.js'

const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid:'',
    detailBanner:[],
    itemInfo:[],
    columns:[],
    services:[],

    shopInfo:[],

    detailInfo:[],

    itemParams:[],

    rate:[],
    recommends:[],

    Count:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 1.拿到getGoodsdetail传过来的iid
    //console.log(options)
    
    this.setData({
       iid:options.iid
    });
    console.log(this.data.iid)
    // 2. 请求商品数据
    this._getGoodsdetail()
    //3.请求推荐数据
    this._getRecommends()

    
  },
  _getRecommends(){
    getRecommends().then(res=>{
     // console.log(res.data)
      const recom=res.data.data.list
      this.setData({
        recommends:recom
      })
    })
  },
  _getGoodsdetail(){
    getGoodsdetail(this.data.iid).then(res=>{
     // console.log(res.data.result)
            /* 1. 获取商品轮播图 */
     const result=res.data.result;
      const dBanner = result.itemInfo.topImages;
      /*const oldBanner = this.data.detailBanner;
          this.data.goods[type].list.push(item)
        }           
     for (let item of dBanner){
          oldBanner.unshift('https:'+item)
      } */
     this.setData({
        //1.轮播图
       detailBanner: dBanner ,
          // 2. 标题组件
       itemInfo: result.itemInfo,
       columns: result.columns,
       services: result.shopInfo.services,
       // 3. 获取店铺信息
       shopInfo: result.shopInfo,

       //4.获取详情图组件信息
       detailInfo: result.detailInfo,
      
      //5.获取params参数尺寸等信息
      itemParams: result.itemParams,

      //6.获得comment评论数据
       rate:result.rate,
     })     
    })
  },

/*  ====事件处理==== */
  handleAddGood(e){
    
    const addCar={}
    var count = addCar.count=1
    addCar.iid=this.data.iid;
    //console.log(this.data.detailBanner[0])
    addCar.image = this.data.detailBanner[0]
    addCar.title = this.data.itemInfo.title
    addCar.price = this.data.itemInfo.lowNowPrice
   /*  console.log(this.data.itemInfo)
    console.log(addCar.price) */
    //console.log(addCar.count)
    this.setData({
      Count:this.data.Count
    })
    addCar.count=this.data.Count
    console.log(addCar.count)
    app.addToShopcar(addCar)
     
    //添加加入购物车完成的提示模板
    wx.showToast({
      title: '加入购物车',
      
    })
  },
  addGoodCount(e){
    const Count={}
    Count.count = e.detail.Count
    //console.log(Count)
    //app.addToShopcar(Count)
    this.setData({
      Count: Count.count
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },



  
 

 

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})