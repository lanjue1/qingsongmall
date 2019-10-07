// components/05-backtop/my-backtop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    showbacktop:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleBacktop(){
      wx.pageScrollTo({
        scrollTop: 0,
      })
    }
  }
})
