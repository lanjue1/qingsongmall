// pages/shopcar/shopcar.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList:[],

    isCheckedAll:false,
    totalCounter:0,
    totalPrice:0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 第一次加载数据
   

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
    this.setData({
      cartList: app.globalData.cartList
    })
   // console.log(typeof app.globalData.cartList)
    //console.log('+++++' , app.globalData)
    

    // 设置勾选后的回调,并拿到勾选中的商品的具体信息回传给cartList
    app.addCartCallback = () => {
      
        this.setData({
          cartList: app.globalData.cartList
        })   
        this.changeData()
    }

    // 设置修改某些 商品后 的回调

     app.changeGoodsSelect = (index, goods) => {
      this.setData({
        [`cartList[${index}]`]: goods
      })
     // console.log('setData', this.data)
    } 

    //修改全部选中的状态
    const selectAll = !this.data.cartList.find(item => !item.checked)
    this.setData({
      isCheckedAll: selectAll
    })
    this.changeData()

    wx.setNavigationBarTitle({
      title: `购物车(${this.data.cartList.length})`,
    })
  },

  changeData() {
    // 1.获取所有选中数据
    let Price = 0;
    let counter = 0;
    //console.log('-----',typeof this.data.cartList)
    for (let item of this.data.cartList) { // object 对象用of ，如果是数组则用 in
      
      if (item.checked) {
          
        console.log(item.price, item.count)
        
        counter++
        
        Price += item.price * item.count
        console.log(Price, counter)
      }
    }

    console.log(counter, Price)
    
    // 2.修改数据
    this.setData({
        totalCounter: counter,
        totalPrice: Price
    })
  },
  checkClick(e){
    this.changeData()
  },

  handleCountTotal(){
    // 1.判断是否是全部选中
    if (this.data.isCheckedAll) { // 目前全部选中
      this.data.cartList.forEach(item => {
        item.checked = false
      })
      this.setData({
        cartList: this.data.cartList,
        isCheckedAll: false
      })
    } else { // 某些没选中
      this.data.cartList.forEach(item => {
        item.checked = true
      })
      this.setData({
        cartList: this.data.cartList,
        isCheckedAll: true
      })
    }
    this.changeData()
    //console.log(this.data.cartList)

  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})