// components/11-menu-scroll/my-menu-scroll.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    categoryList:{
      type:Array,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    handleStyle:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlMenuItem(e){
      //console.log(e)
      const index = e.currentTarget.dataset.index
         this.setData({
          handleStyle:index
        }) 
        this.triggerEvent('menuClick',{index})
    }
  }
})
