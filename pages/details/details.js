// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: '',
    title: '',
    descriptions: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('options', options)
    this.setData({
      img: wx.getStorageSync('img'),
      title: wx.getStorageSync('title'),
      descriptions: wx.getStorageSync('descriptions')
    })
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
  copy: function () {
    console.log('剪切板')
    if (wx.setClipboardData) {
      wx.setClipboardData({
        data: this.data.title,
        success(res) {
          wx.getClipboardData({
            success(res) {
              console.log(res.data) // data
            }
          })
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '您的微信版本太低，请升级'
      })
    }

  }
})