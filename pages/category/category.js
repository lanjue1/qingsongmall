// pages/category/category.js
import {
            getCategory,
            getCategorySub,
            getCategoryDetail
              } from '../../request/catagory.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryList: [],
    currentIndex:0,
    cateInfo:[],
    categoryDetail:[],
    categoryData:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // 1.加载分类页面-类别数据
    wx.setNavigationBarTitle({
      title: '商品分类',
    })
    this._getCategory();
    
      //2.加载分类页面-子类别数据
    
  },
  menuClick(e) {
   // console.log(e)
    const Index = e.detail.index
    
    this._getCategorySub(Index)
    this._getCategoryDetail(Index)
  },
  
  _getCategory(){
    getCategory().then(res=>{
      //1.拿到category 的数据      
      const categoryList = res.data.data.category.list
      const currentIndex = this.data.currentIndex

      //const maitKey = categoryList[currentIndex].maitKey;
     // console.log(categoryList[currentIndex].maitKey); 
      // this._getCategorySub()中要传入的是categoryList[0].maitKey，现在需要拿到categoryList[currentIndex];

      //2. 拿到category 中的maiKey的值      

      const categoryData = {}
      //console.log(categoryData)
      for (let i = 0; i < categoryList.length; i++) {
        categoryData[i] = {
          subcategories: [],
          categoryDetail: []
          // categoryDetail: {
          //   'pop': [],
          //   'new': [],
          //   'sell': []
          // }
        }
      }
      this.setData({
        categoryList: categoryList,
        categoryData: categoryData
      });
      //console.log(this.data.categoryList[currentIndex])
      //console.log(this.data.currentIndex)
    })
    
    this._getCategorySub(0)

    //this._getCategoryDetail(0)
    this._getCategoryDetail(0,'pop')
  },
/* 拿到右边页面的分类具体数据 */
  _getCategorySub(currentIndex){
      setTimeout(()=>{
        const maitkey = this.data.categoryList[currentIndex].maitKey;
       // console.log(this.data.categoryList)
        getCategorySub(maitkey).then(res=>{
               //console.log(res.data)
               const dataList=res.data.data.list
          
              this.setData({
                cateInfo: dataList
              })          
          });
          
      },400)  
  },

  /* _getCategoryDetail(currentIndex, type){
    setTimeout(()=>{
      //const miniWallkey = this.data.categoryList[currentIndex].miniWallkey
    //  console.log(miniWallkey)
     this._getRealCategoryDetail(currentIndex, miniWallKey, 'pop');
     
    },310)
    
     // this._getRealCategoryDetail(currentIndex, miniWallKey, 'new');
  //this._getRealCategoryDetail(currentIndex, miniWallKey, 'sell');
   // index, miniWallKey, type
      
},  */

  _getCategoryDetail(currentIndex,type) {
    setTimeout(()=>{
     const miniWallkey = this.data.categoryList[currentIndex].miniWallkey
     // console.log(miniWallkey)
      getCategoryDetail(miniWallkey, 'pop').then(res => {
          
        // 1.获取categoryData
        const categoryData = this.data.categoryData

        // 2.修改数据
        categoryData[currentIndex].categoryDetail = res;
        const categoryDataDetail = categoryData[currentIndex].categoryDetail.data
        // 3.修改data中的数据
        this.setData({
          categoryData: categoryDataDetail
        })
        //console.log(this.data)
      })   
    },600)
  },
  
  



  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})