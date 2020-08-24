//index.js
//获取应用实例
Page({
  data: {
    name: 'Mini world',
    age: '26',
    students: [
      {id: 110, name: 'kobe', age: 38},
      {id: 111, name: 'james', age: 35},
      {id: 112, name: 'curry', age: 30},
      {id: 112, name: 'jerax', age: 26},
    ],
    counter:0,
    list: []
  },
  handleBtnClick(){
    // 1 错误做法：界面不会刷新
    // this.data.counter += 1

    // 2 this.setData()
    this.setData({
      counter:this.data.counter + 1
    })
  },
  handleSubtraciton(){
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleGetUserInfo(event){
    console.log(event)
  },

  //----1、监听页面的生命周期函数
  //页面被加载出来
  onload() {
    console.log('onload')
    // const _this = this;
    wx.request({
      url: 'http://152.136.185.210:8000/api/z8/recommend',
      // 箭头函数中的this一层层向上找
      success: (res) => {
        console.log(res)
        const data = res.data.data.list;
        // _this.setdata({
        this.setData({
          list:data
        })
      }
    })
  },
  // 页面显示出来时
  onShow() {
    console.log('onShow')
  },
  //页面初次渲染完成时
  onReady() {
    console.log('onReady')
  },
  //页面隐藏时
  onHide() {
    console.log('onHide')
  },
  //页面跳转时，页面卸载
  onUnload() {
    console.log('onUnload')
  },

  // ---------3 监听wxml中相关的事件-------
  handleGetUserInfo(event){
    console.log(event)
  },
  handleViewClick(){
    console.log('hhahaa')
  },

  // ---------4 监听其他事件-------
  //监听页面的滚动
  onPageScroll(obj){
    console.log(obj)
  },
  //监听页面滚动到底部
  onReachBottom(){
    console.log('页面滚动到底部')
  },
  onPullDownRefresh(){
    console.log('下拉刷新事件')
  },
  //点击TABbar事件
  onTabItemTap(){
    console.log('tabbar事件')
  }


})