var app=getApp()

Page({
    data: {
        detail: {},
        countdown: {},
        lists: [],
    },
    onReady: function () {
        wx.setNavigationBarTitle({
            title: '团详情'
        })
    },

    onLoad:function(options){
       console.log(options.groupId);
      for(var i=0;i<app.globalData.lists.length;i++){
        console.log(app.globalData.lists[i].groupId)
        if(options.groupId==app.globalData.lists[i].groupId){
          this.setData({
            detail:app.globalData.lists[i].detail,
            countdown:app.globalData.lists[i].countdown,
            lists:app.globalData.lists[i].lists,
          })
        }

      }

    },

})