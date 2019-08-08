var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

var server = require('./utils/server');
App({
	onLaunch: function () {
    qcloud.setLoginUrl(config.service.loginUrl)
	},
	onShow: function () {
		console.log('App Show')
	},
	onHide: function () {
		console.log('App Hide')
	},
	globalData: {
    // userInfo: null,
		hasLogin: false,
    openId:'',
		shops: [
			{
				id: 1,
        img: '',
				distance: 1.8,
				sales: 1475,
				logo: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/shops/logo_1.jpg',
				name: '鲜芋仙',
        style:'甜品',
				desc: ''
			},
			{
				id: 2,
        img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=93415867,2883025123&fm=26&gp=0.jpg',
				distance: 2.4,
				sales: 1284,
				logo: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/shops/logo_2.jpg',
				name: '皇茶',
        style: '饮品',
				desc: ''
			},
		],

    lists: [{
    groupId:1,  
    goodsTitle:'鲜芋仙',
    target:'贸大北门',
		groupSize:2,
    SumGroup:5,
		lessNum:2,
		transPrice:"1",

      detail: {
        id: "9514263",
        img: "https://f10.baidu.com/it/u=1856966395,724479572&fm=72",
        title: "鲜芋仙拼车",
        people: "6",
        newPrice: "2",
        oddPrice: "10"
      },
      countdown: {
        people: "2",
        time: "02: 01: 15"
      },
      lists: [{
        userImg: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2537028580,4058459576&fm=26&gp=0.jpg",
        userName: "MeiMei",
        goods: "芋圆1号",
        head: true
      }, {
        userImg: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3438599323,2232688626&fm=200&gp=0.jpg",
        userName: "A姜丽有明堂酒栈",
        goods: "芋圆2号"
      }, {
        userImg: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2757583147,2706259601&fm=26&gp=0.jpg",
        userName: "水无痕",
        goods: "芋圆3号"
      }, {
        userImg: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=861331249,974617010&fm=200&gp=0.jpg",
        userName: "白天不懂夜的黑",
        goods: "咖啡"
      }, {
        userImg: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=698337655,3286161252&fm=26&gp=0.jpg",
        userName: "谁欠谁幸福",
        goods: "奶茶"
      }],

	},



  
      {
        groupId: 2,  
        goodsTitle: '皇茶',
        target: '贸大虹远楼',
        groupSize: 1,
        SumGroup:10,
        lessNum: 5,
        transPrice: "2",
        userList: [{
          name: 'zhagnsan',
          headImg: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=773579743,2271149885&fm=27&gp=0.jpg"
        },
        ],
        detail: {
          id: "9514263",
          img: "https://f10.baidu.com/it/u=1856966395,724479572&fm=72",
          title: "皇茶拼车",
          people: "7",
          newPrice: "3",
          oddPrice: "20"
        },
        countdown: {
          people: "2",
          time: "02: 01: 15"
        },
        lists: [{
          userImg: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2537028580,4058459576&fm=26&gp=0.jpg",
          userName: "MeiMei",
          goods: "芋圆1号",
          head: true
        }, {
          userImg: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3438599323,2232688626&fm=200&gp=0.jpg",
          userName: "A姜丽有明堂酒栈",
          goods: "芋圆2号"
        }, ],




      },


  ]

	},

})
