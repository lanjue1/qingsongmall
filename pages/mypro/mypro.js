// pages/mypro/mypro.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Name:'登录/注册',
    userPhoto:'/assets/profile/avatar.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        Name: app.appData.userInfo.username,
        userPhoto:'/assets/home/login.png'
      })
  },
  handleToLogin(){
    if (this.data.Name == '登录/注册'){
      wx.redirectTo({
        url: '../login/login',
      })
    }else{
      wx.showToast({
        title: '您已正常登陆',
        icon:'none',

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