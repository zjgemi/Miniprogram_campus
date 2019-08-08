var config = require('../../config')

Page({
  data: {
    brands: [],
    objectArray: [
      {
        brand: "文档打印",
        id: 0,
        array: ["单面", "双面"],
        array2: ["1", "2","3","4","5"],
        array3: ["黑白", "彩色"],
        array4: ["A4","A0", "A1","A2","B1","B2","A5"],
      },
      {
        brand: "论文打印",
        id: 1,
        array: ["单面", "双面"],
        array2: ["1", "2", "3", "4", "5"],
        array3: ["黑白", "彩色"],
        array4: ["A4", "A0", "A1", "A2", "B1", "B2", "A5"],
      },

      {
        brand: "扫描",
        id: 2,
        array: ["单面"],
        array2: ["1"],
        array3: ["黑白", "彩色"],
        array4: [""],

      },
      {
        brand: "海报",
        id: 3,
        array: ["单面"],
        array2: ["1", "2", "3", "4", "5"],
        array3: ["黑白", "彩色"],
        array4: ["60✖80","小于60✖80"],
      },
      {
        brand: "证书",
        id: 3,
        array: ["单面"],
        array2: ["1", "2", "3", "4", "5"],
        array3: ["黑白", "彩色"],
        array4: ["A4"],
      },
      {
        brand: "易拉宝",
        id: 3,
        array: ["单面"],
        array2: ["1", "2", "3", "4", "5"],
        array3: ["黑白", "彩色"],
        array4: ["A4"],
      },
      {
        brand: "展板",
        id: 3,
        array: ["单面"],
        array2: ["1", "2", "3", "4", "5"],
        array3: ["黑白", "彩色"],
        array4: ["A4"],
      },
      {
      brand: "条幅",
      id: 3,
      array: ["单面"],
      array2: ["1", "2", "3", "4", "5"],
      array3: ["黑白", "彩色"],
      array4: ["A4"],
      },
      {
        brand: "背景板",
        id: 3,
        array: ["单面"],
        array2: ["1", "2", "3", "4", "5"],
        array3: ["黑白", "彩色"],
        array4: ["A4"],
      },
      {
      brand: "胸牌",
      id: 3,
      array: ["单面"],
      array2: ["1", "2", "3", "4", "5"],
      array3: ["黑白", "彩色"],
      array4: ["A4"],
      },
    ],
    object1: [],
    object2: [],
    object3: [],
    object4: [],
    brandindex: 0,
    index1: 0,
    index2: 0,
    index3:0,
    index4: 0,
    index_phone:0,
    userInfo:{},
    disable1: false,
    disable2:true,
    phone: [],
  },

  usePhone:function(){
    this.setData({
      disable1: false,
      disable2: true,
    })
  },



  addPhone: function () {
    this.setData({
      disable1: true,
      disable2: false,
    })
  },


  onLoad: function (options) {
    var bean = JSON.parse(options.list);
    console.log(bean)
    if (options.list == null) {
      wx.showToast({
        title: '数据为空',
      })
      return;
    }
    this.setData({
      userInfo: bean
    })
    // 页面初始化 options为页面跳转所带来的参数
    console.log("传入参数")
    console.log(this.data.userInfo.openId)


    var objectArray = this.data.objectArray
    var brands = []
    for (var i = 0; i < objectArray.length; i++) {
      brands.push(objectArray[i].brand, )
    }
    this.setData({ brands: brands, 
    object1: objectArray[this.data.brandindex].array ,
    object2: objectArray[this.data.brandindex].array2,  
    object3: objectArray[this.data.brandindex].array3,  
    object4: objectArray[this.data.brandindex].array4,  
    })

    var that = this
    wx.request({
      url: config.service.host + '/weapp/getphone',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        openid: this.data.userInfo.openId
      },
      success: function (res) {
        console.log(res.data.data.phone)

        var phone= new Array()
        for(var i=0;i<res.data.data.phone.length;i++){
          console.log(res.data.data.phone[i].phone)
         phone.push(res.data.data.phone[i].phone)
        };
        console.log(phone)
        that.setData({
          phone: phone
        })
        console.log(that.data.phone)
      }
    })
    
  },
  bindPickerChange0: function (e) {
    this.setData({ brandindex: e.detail.value, index1: 0 })
    var objectArray = this.data.objectArray
    this.setData({ object1: objectArray[this.data.brandindex].array,
      object2: objectArray[this.data.brandindex].array2,
      object3: objectArray[this.data.brandindex].array3,
      object4: objectArray[this.data.brandindex].array4,
    })
  },
  bindPickerChange1: function (e) {
    this.setData({
      index1: e.detail.value
    })
  },

  bindPickerChange2: function (e) {
    this.setData({
      index2: e.detail.value
    })
  },

  bindPickerChange3: function (e) {
    this.setData({
      index3: e.detail.value
    })
  },


  bindPickerChange4: function (e) {
    this.setData({
      index4: e.detail.value
    })
  },

  formSubmit: function (e) {
    console.log(e)
    var that = this;
    if(e.detail.value.phone=='choosePhone'){
      var phone=this.data.phone[e.detail.value.phone1]
    }else{
      var phone=e.detail.value.phone2
    }
    if (e.detail.value.type.length == 0 || e.detail.value.side.length == 0 || e.detail.value.number.length == 0 || e.detail.value.color.length == 0 ||e.detail.value.size.length==0||e.detail.value.phone.length==0) {
      wx.showModal({
        title: "信息输入不全",
        content: "请输入完整的预约信息",
      })
    } else {
      wx.navigateTo({
        url: '/page/print/uploadFile?type=' + this.data.brands[e.detail.value.type] + '&side=' + this.data.object1[e.detail.value.side] + '&phone=' + phone + '&number=' + this.data.object2[e.detail.value.number] + '&color=' + this.data.object3[e.detail.value.color] + '&size=' + this.data.object4[e.detail.value.size]+'&openId=' + this.data.userInfo.openId,
      })
          }

    },

})
