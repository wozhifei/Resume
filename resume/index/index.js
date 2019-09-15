//index.js
const app = getApp()

Page({
  onReady() {
    this.data.Time = setInterval(() => {
      this.setData({
        time: -this.data.time
      })
      if (this.data.time <= 0) {
        clearInterval(this.data.Time)
        this.goHome()
      }
    }, 1000)
  },
  goHome() {
    clearInterval(this.data.Time)
    wx.reLaunch({
      url: '../home/home',
    })
  },

  data: {
    time: 1,
    plain: true,
  },
  
})
