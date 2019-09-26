// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播
    imgUrls: [
      '/images/img1.png',
      '/images/img3.png',
      '/images/img4.png',
      '/images/img5.png',
      '/images/img6.png',
      '/images/img7.jpg'
    ],
    indicatorDots: true,      // 是否显示面板指示点
    autoplay: true,           // 是否自动切换
    interval: 5000,           // 自动切换时间间隔
    duration: 1000,           // 滑动动画时长
    circular: true,           // 是否采用衔接滑动
    // 数据列表
    list: [{
      img: '/images/person1.png',
      title: '精英贷',
      descriptions: [
        '23周岁以上即可',
        '最快3小时下款',
        '件均8万，最高20万'
      ]
    },
    {
      img: '/images/person2.png',
      title: '月供贷',
      descriptions: [
        '23周岁以上即可',
        '最快3小时下款',
        '件均8万，最高20万'
      ]
    },
    {
      img: '/images/person3.png',
      title: '保单贷',
      descriptions: [
        '23周岁以上即可',
        '最快3小时下款',
        '件均8万，最高20万'
      ]
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 点击跳转到详情
  toDetail: function (e) {
    console.log('toDetail', e);
    var index = e.currentTarget.dataset.index;
    console.log(index);
    var proList = this.data.list;
    var img = proList[index].img;
    var title = proList[index].title;
    var descriptions = proList[index].descriptions;
    // 方式一：跳转(url带参数传值)
    // wx.navigateTo({
    //   url: '/pages/details/details?title='+title,
    // 方式二：本地缓存
    wx.navigateTo({
      url: '/pages/details/details'
    })
    wx.setStorageSync('img', img)
    wx.setStorageSync('title', title)
    wx.setStorageSync('descriptions', descriptions)
  },
  // 免费在线咨询
  toContact: function (e) {
    console.log('toContact', e)
  }
})