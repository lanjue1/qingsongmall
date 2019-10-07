// components/02-tabstrip/my-tabstrip.js
Component({
  
  properties: {
    tablist:{
      type:Array,
      value: []
    }
  },
  data: {
    currentIndex:0
  },

  methods: {
    tabClick(event){
        // 1.取出index
        
      const index = event.currentTarget.dataset.index;
        // 2. 修改currentIndex 
       this.setData({
         currentIndex:index
       })
     // console.log(this.properties.tablist[index])
       // 3. 通知页面内部的点击事件
     // this.triggerEvent('itemClick', { index, tablist:this.properties.tablist[index] }, {});
      this.triggerEvent('itemClick', { index, tablist: this.properties.tablist[index] },{}) 
      
    }
  }
})
