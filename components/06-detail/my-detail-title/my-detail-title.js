// components/06-detail/my-detail-title/my-detail-title.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemInfo:{
        type:Object,
        
      },
    columns: {
      type: Object,

    },
    services: {
      type: Object,

    },
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    true:true,
    Count:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addGoodCount(e){
      
      this.setData({
        Count: e.detail.goodsCount
      })
     // console.log(this.data.Count)
      this.triggerEvent('addGoodCount', { Count: this.data.Count},{})
    }


  }
})
