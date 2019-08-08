// page/count/count.js
Page({
  data: {
    // text:"这是一个页面"
    array: ["请选择配送方式", "单点", "拼车"],
    location: ["请选择配送地点", "1号楼", "5号楼"],
    toast1Hidden: true,
    date: '2018-09-01',
    modalHidden: true,
    modalHidden2: true,
    notice_str: '',
    index: 0,
    index2:0,
    list:{}
  },
  toast1Change: function (e) {
    this.setData({ toast1Hidden: true });
  },
  //弹出确认框
  modalTap: function (e) {
    this.setData({
      modalHidden: false
    })
  },
  confirm_one: function (e) {
    console.log(e);
    this.setData({
      modalHidden: true,
      toast1Hidden: false,
      notice_str: '提交成功'
    });
  },
  cancel_one: function (e) {
    console.log(e);
    this.setData({
      modalHidden: true,
      toast1Hidden: false,
      notice_str: '取消成功'
    });
  },
  //弹出提示框
  modalTap2: function (e) {
    this.setData({
      modalHidden2: false
    })
  },
  modalChange2: function (e) {
    this.setData({
      modalHidden2: true
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },

  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },

  onLoad: function (options) {
    var bean=JSON.parse(options.list);
    console.log(bean)
    if(options.list==null){
      wx.showToast({
        title: '数据为空',
      })
      return;
    }
    this.setData({
      list:bean
    })
    // 页面初始化 options为页面跳转所带来的参数
    console.log("传入参数")
    console.log(this.data.list)
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  formSubmit: function (e) {
    var that = this;
    var formData = e.detail.value;
    var sex;
    console.log(formData);

    if (e.detail.value.gender == 1) {
      sex = "男"
    } else {
      sex = "女"
    }

    if (e.detail.value.username.length == 0 || e.detail.value.smallName.length == 0 || e.detail.value.age == 0 || e.detail.value.age == 0) {
      wx.showModal({
        title: "信息输入不全",
        content: "请输入完整的预约信息",
      })
    } else {
      wx.request({
        url: 'https://104724433.xuanxuanballe.club/weapp/form',
        // url: 'https://rv647fej.qcloud.la/weapp/form',
        method: "POST",
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
          //  'Content-Type': 'application/json'
        },
        //data: {name:e.detail.value.username,sex:e.detail.value.gender,age:e.detail.value.age,date:e.detail.value.date},
        data: { name: e.detail.value.username, smallName: e.detail.value.smallName, age: e.detail.value.age, sex: sex, date: e.detail.value.date },
        success: function (res) {
          if (res.data.status == 0) {
            wx.showToast({
              title: res.data.info,
              icon: 'loading',
              duration: 1500
            })
          } else {
            wx.showToast({
              title: '提交成功',
              icon: "success",
              duration: 1000
            })
          }
          console.log(res)
        }
      })
    }

  },
  formReset: function () {
    console.log('form发生了reset事件');
    this.modalTap2();
  }
})
