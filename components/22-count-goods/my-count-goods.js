// components/22-count-goods/my-count-goods.js
const app=getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   
    goods:{
      type:Object,
    },
    index:{
      type:Number
    }
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
    onCheckClick(e){
      const goods = app.globalData.cartList.find((item) => item.iid === this.properties.goods.iid)
      goods.checked = !goods.checked

      //获取当前商品的index
      console.log(goods.checked)
      console.log(this.properties.goods)
      const index = e.currentTarget.dataset.index
      
      app.changeGoodsSelect(index,goods)
      this.triggerEvent('CheckClick', { goods,},{index})
    }
  }
})
