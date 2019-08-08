var config=require('../../config')
// page/print/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    price:'',
    transaction:'',
    openId:'',
    txtOrderCode: ''

  },


payment:function(){
  wx.request({
    url: config.service.host + '/weapp/prepay',
    data: { openId: this.data.openId, transaction: this.data.transaction, price: this.data.price, body: '打印' },
    method: 'POST',
    success: function (res) {
      console.log(res)
    }
  })
  // // var ordercode = this.data.txtOrderCode;
  // wx.request({
  //   success: function (res) {
  //     if (res.code) {
  //       wx.request({
  //         url: config.service.host + '/weapp/prepay',
  //         data: {
  //           code: res.code,//要去换取openid的登录凭证
  //           ordercode: ordercode
  //         },
  //         data:{openId:this.data.openId,transaction:this.data.transaction,price:this.data.price,body:'打印'},
  //         method: 'POST',
  //         success: function (res) {
  //           console.log(res)
  //           wx.requestPayment({
  //             timeStamp: res.data.timeStamp,
  //             nonceStr: res.data.nonceStr,
  //             package: res.data.package,
  //             signType: 'MD5',
  //             paySign: res.data.paySign,
  //             success: function (res) {
  //               // success
  //               console.log(res);
  //             },
  //             fail: function (res) {
  //               // fail
  //               console.log(res);
  //             },
  //             complete: function (res) {
  //               // complete
  //               console.log(res);
  //             }
  //           })
  //         }
  //       })
  //     } else {
  //       console.log('获取用户登录态失败！' + res.errMsg)
  //     }
  //   }
  // });
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

  console.log('options.transaction')
    console.log(options)
   console.log(options.transaction)
   var transaction= options.transaction
    wx.request({
      url: config.service.host + '/weapp/gettransaction?transaction='+transaction,
      data: {
        id: '',
        title: ''
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data.data[0])
        that.setData({
          price:res.data.data[0].price,
          transaction: res.data.data[0].transaction,
          openId: res.data.data[0].openid,
        })
      },
      fail: function (res) {
      },
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