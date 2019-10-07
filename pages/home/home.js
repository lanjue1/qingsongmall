// pages/home/home.

import { getMultidata,
             getGoodsdata
            }  from "../../request/home.js"

Page({

  data: {
    banners:[],
    recommend:[],
    goods:{
      'pop':{ page:0 , list: [] },
      'new': { page: 0, list: [] },
      'sell': { page: 0, list: [] },
    },
    currentType: 'pop',
    showbacktop:false,

    showToptab:false,
    tabstripTop:0,
    zwTabstrip:true,
  },
  onLoad: function () {
    // 请求轮播图数据
      this._getMultidata();
    //请求商品数据
    this._getGoodsdata('pop');
    this._getGoodsdata('new');
    this._getGoodsdata('sell');

    //console.log(this.data.goods.pop.list)
  },

 /*---------------------数据请求-----------  */
 //    1. 获取轮播图和推荐位数据
  _getMultidata(){
        getMultidata().then(res => {
          const banners = res.data.data.banner.list.map(item=>{
            return item.image
          });

          const recommend = res.data.data.recommend.list;

          this.setData({
            banners: banners,
            recommend: recommend,

          })
         // console.log(banners)
        })
  },

//  2. 获取商品展示具体数据
  _getGoodsdata(type){
      //1.获取页码
      const page=this.data.goods[type].page+1;

    getGoodsdata(type,page).then(res=>{
        //console.log(res)
        //2. 取出数据
        const list=res.data.data.list
        //3.讲数据放到对应type的list中；两种方法:方法一：  方法二是...语法，可以拿到数组中的每一项并放到相应数组中去                    this.data.goods[type].list.push(...list)
        /* for (let item of list){
          this.data.goods[type].list.push(item)
        } */

        // 4. 将数据设置到data中的list中去
      const oldList = this.data.goods[type].list
          oldList.push(...list)
      const typeKey = `goods.${type}.list`

      const pageKey = `goods.${type}.page`
      this.setData({
        [typeKey]:oldList,
        [pageKey]:page
      })
     // console.log(this.data.goods.pop.list) 

    })
  },
  

  /*  ------------------监听事件---------- */
  handletabClick(event){
      //console.log(event)
      // 1.点击可以切换商品展示第一步，拿到对应的Index
    const index = event.detail.index;
    
    // 2. 将商品类型type和点击的index对应起来
    const type = ['pop', 'new', 'sell']
    this.setData({
      currentType:type[index]
    })

  },

  
/* ---获取固定的tabtrip的top高度，当页面滑动到此高度时候显示被吸顶的tabtrip */
  //  1.  在onShow页面展示函数中获取tabtrip距离页面顶部的高度；
onShow:function(){
  setTimeout(()=>{
    var query = wx.createSelectorQuery()//创建节点查询器 query
    query.select('#pre-tabstrip').boundingClientRect().exec(res => {
      //console.log(res);

      this.setData({
        tabstripTop: res[0].top

      });
      //console.log(this.data.tabstripTop);
    })
  },500)
    
},
//  2. 监听页面滚动距离scrollTop




/* ------------------页面其他相关事件------------------------- */

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  
      /* 监听页面滚动数据--回到顶部按钮+  监听页面滚动距离scrollTop----吸顶效果*/
  onPageScroll: function (e) {
    //console.log(e)
      if(e.scrollTop>=1000){
          this.setData({
            showbacktop:true
          })
      }else{
        this.setData({
          showbacktop: false
        });
        const hidTop = this.data.tabstripTop 
        if (e.scrollTop >hidTop ){
          this.setData({
            showToptab:true,
            zwTabstrip: false
          })

        } else {
          this.setData({
            showToptab: false,
            zwTabstrip: true
          })
         };     
  }},
 
    
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})