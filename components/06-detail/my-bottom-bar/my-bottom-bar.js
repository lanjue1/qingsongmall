// components/06-detail/my-bottom-bar/my-bottom-bar.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    addGoodsTo(e){
      
      this.triggerEvent('addGood',{},{})

    }
  }
})
