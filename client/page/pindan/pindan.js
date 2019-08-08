var Util = require("../../utils/util");
var app = getApp();

Page({
  data: {

    hidden: true,           // loading动画是否显示
    tipShow: false,         // 判断是否还有更多数据
    page: 0,                // 当前分页
    nextPage: "",           // 分页信息
    us: "",                 // 用户分享的ID，之前为了做分享统计什么的，现在没卵用
    lists: app.globalData.lists
  },

  onReady: function () {
    wx.setNavigationBarTitle({
      title: '正在热拼'
    })
  },
  onLoad: function (options) {
  },

})
