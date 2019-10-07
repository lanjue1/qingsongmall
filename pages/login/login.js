// pages/login/login.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      username:'',
      password:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  userName(e){
    
    this.setData({
      username: e.detail.value      
    })
  },
  userPassword(e){
    //console.log(e)
   this.setData({
      password: e.detail.value,
    }) 
  },
  btnClick(){
    app.appData.userInfo= {
      username : this.data.username, 
      password:this.data.password}

    console.log(app.appData.userInfo)
    if (app.appData.userInfo.username && app.appData.userInfo.password){
      wx.reLaunch({
          url: '../mypro/mypro',
        })
    }else{
      wx.showToast({
        title: '请输入用户名密码',
        icon:'none'
      })
    }
    

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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