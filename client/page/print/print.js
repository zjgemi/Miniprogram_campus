// page/print/print.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
var app = getApp(); 
var index; 
var nav_centent_list = [
  ['数码快印', '商务印刷', '喷绘写真','平面设计'], 
  ['公司环境', '生产设备', '印刷包装', '远程打印'], 
  ['常见问题', '技术动态'], 
  []];


Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',

    swiperCurrent: 0, 
    indicatorDots: true,
     autoplay: true, 
     interval: 3000, 
     duration: 1000, 
     circular: true, 
    imgUrls: ['http://wx3.sinaimg.cn/mw690/006p6Tvely1fvyvtzglquj30de0a9jsw.jpg', 'http://wx4.sinaimg.cn/mw690/006p6Tvely1fvyvtvxcibj30de0a9jtt.jpg', 'http://wx3.sinaimg.cn/mw690/006p6Tvely1fvyvtr4lygj318c0tyqdt.jpg'],
    nav_title: ['产品中心', '生产设备', '公司简介', '价格一览'],
    shownavindex: null,
    nav_centent: null

  },

  click_nav: function (e) { 
    if (index == e.currentTarget.dataset.index && this.data.nav_centent != null) { index = e.currentTarget.dataset.index; 
    this.setData({ 
      nav_centent: null, 
      shownavindex: null, 
      }) 
  } else if (this.data.nav_centent == null) { 
    console.log(11)      
    index = e.currentTarget.dataset.index; 
    this.setData({ 
      shownavindex: index, 
      nav_centent: nav_centent_list[Number(index)] 
      }) 
    } else { 
      console.log(22)      
      index = e.currentTarget.dataset.index; 
      this.setData({
        shownavindex: index, 
        nav_centent: nav_centent_list[Number(index)] 
        }) 
        } 
    },

// bindgetuserinfo:function(){
//   var S = this;
//   wx.getUserInfo({
//     success: function (res) {
//       console.log("userInfo:" + res)
//       　　　//do anything
//     },
//     fail: S.showPrePage
//   })

// },

toUpload:function(e){
  
  wx.navigateTo({
    url: '/page/print/upload',
  })
},


  bindGetUserInfo: function () {
    if (this.data.logged) {
      console.log(this.data.userInfo)
      var list = JSON.stringify(this.data.userInfo);
      wx.navigateTo({
        url: '/page/print/upload?list=' + list,
      })
    }

    util.showBusy('正在登录')

    const session = qcloud.Session.get()

    if (session) {
      qcloud.loginWithCode({
        success: res => {
          this.setData({ userInfo: res, logged: true })
          util.showSuccess('登录成功')
          console.log(this.data.userInfo)
          var list = JSON.stringify(this.data.userInfo);
          console.log(list)
          wx.navigateTo({
            url: '/page/print/upload?list=' + list,
          })
        },
        fail: err => {
          console.error(err)
          util.showModel('登录错误', err.message)
        }
      })
    } else {
      qcloud.login({
        success: res => {
          this.setData({ userInfo: res, logged: true })
          util.showSuccess('登录成功')
          console.log(this.data.userInfo)
          var list = JSON.stringify(this.data.userInfo);
          console.log(list)
          wx.navigateTo({
            url: '/page/print/upload?list='+list,
          })
        },
        fail: err => {
          console.error(err)
          util.showModel('登录错误', err.message)
        }
      })
    }
  },

  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  chuangEvent: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  },
  swipclick: function (e) { 
    console.log(this.data.swiperCurrent);
     wx.switchTab({ 
       url: this.data.links[this.data.swiperCurrent]
        })
   },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    wx.getSetting({
      success:function(res){
      }
    })
  },

onGotUserInfo:function(e){
  console.log(e.detail.userInfo)
  this.setData({
    userInfo:e.detail.userInfo,
  })

  wx.login({
    success:function(res){
      if(res.code){
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session',
          method:'GET',
          data:{
            code:res.code,
            grant_type:'authorization_code'
          },
          header:{
            'content-type':'application/json'
          },
          success:function(res){
            var sss=res.data
            var obj=JSON.parse(sss)
            var id=obj.openId
            that.setData({
              openId:id
            })
          }
        })
      }
    }
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

  }
})