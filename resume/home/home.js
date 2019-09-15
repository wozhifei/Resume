// home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      '../image/02.jpg',
    ],
    headimg:[
      '../image/01.png',
    ],
    exp:[
      '../image/11.png',
    ],
    sef:[
      '../image/08.png',
    ],

    Hobby: [
      '../image/09.png',
    ],


    but1:'刘文博',
    but1_1:'\n查看详情',
    but2:'\n美好的象牙塔生活',
    but2img:[
      '../image/08.svg',
    ],
    but3:'\n实践才是真道理',
    but4:'\n吾日三省吾身？',
    but5:'\n爱好是一切的开端',
    
  },

  goIdCard: function () {
    wx.navigateTo({
      url: '../IdCard/IdCard',
    })
  },

  goEducation: function(){
    wx.navigateTo({
      url: '../Education/Education',
    })
  },

  goExp: function(){
    wx.navigateTo({
      url: '../experience/experience',
    })
  },

  goSef: function(){
    wx.navigateTo({
      url: '../self-introduction/self-introduction',
    })
  },

  goHobby: function(){
    wx.navigateTo({
      url: '../Hobby/Hobby',
    })
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

  }
})