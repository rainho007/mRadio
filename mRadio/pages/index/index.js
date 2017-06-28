//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '点击头像听音乐...',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //绑定头像点击事件处理函数，跳到音乐播放界面
  bindViewTap2Music:function() {
    wx.navigateTo({
        url: '../music/music',
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
