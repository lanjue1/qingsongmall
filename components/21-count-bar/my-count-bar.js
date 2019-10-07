// components/21-count-bar/my-count-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isCheckedAll:{
      type:Boolean,
      value:false
    },
    price:{
      type:Number
    },
    counter:{
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
    selectAll(){
      this.triggerEvent('selectALL',{},{})
    },
    handleSettlement(){
      this.triggerEvent('HandleSettlement' ,)
    }
  }
})
