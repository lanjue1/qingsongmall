// components/06-detail/my-count-number/my-count-number.js
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
    Number: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    subtract() {
      if (this.data.Number > 1) {
        this.setData({
          Number: this.data.Number - 1
        })
      } else {
        Number: 1
      }
      this.triggerEvent('CountNumber',{goodsCount:this.data.Number})
    },
    add() {
      if (this.data.Number <= 100) {
        this.setData({
          Number: this.data.Number + 1
        })
      } else {
        this.setData({
          Number: 100
        })
      }

      this.triggerEvent('CountNumber', { goodsCount: this.data.Number })
    },
  }
})
