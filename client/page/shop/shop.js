var app = getApp();
var server = require('../../utils/server');
Page({
	data: {
		goods: {
			1: {
				id: 1,
				name: '芋圆1号',
				pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
				sold: 1014,
        desc:'芋圆+绿豆+莲子+珍珠',
				price: 23
			},
			2: {
				id: 2,
        name: '芋圆2号',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '芋圆+地瓜+薏仁+珍珠',
        price: 23
			},
			3: {
				id: 3,
        name: '芋圆3号',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '芋圆+红豆+花生+珍珠',
        price: 23
			},
			4: {
				id: 4,
        name: '芋圆4号',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '芋圆+红豆+芋头+珍珠',
        price: 23
			},
			5: {
				id: 5,
        name: '芋圆5号',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '芋圆+红豆+粉粿+珍珠',
        price: 23
			},
      6: {
        id: 6,
        name: '仙草1号',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '绿豆+莲子+珍珠',
        price: 25
      },
      7: {
        id: 7,
        name: '仙草2号',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '地瓜+薏仁+珍珠',
        price: 25
      },
      8: {
        id: 8,
        name: '仙草3号',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '红豆+花生+珍珠',
        price: 25
      },
      9: {
        id: 9,
        name: '仙草4号',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '红豆+芋头+珍珠',
        price: 25
      },
      10: {
        id: 10,
        name: '仙草5号',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '红豆+粉粿+珍珠',
        price: 25
      },
      11: {
        id: 11,
        name: '鲜芋仙招牌',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '仙草冰沙+仙草冻+芋圆',
        price: 25
      },
      12: {
        id: 12,
        name: '招牌烧仙草',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '小芋圆+花豆+珍珠+烧仙草',
        price: 25
      },
      13: {
        id: 13,
        name: '黑糖粉粿冰',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '芋圆+黑粉粿+红豆+珍珠',
        price: 25
      },
      14: {
        id: 14,
        name: '鲜芋仙八宝冰',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 25
      },
      15: {
        id: 15,
        name: '红豆牛奶冰',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 25
      },
      16: {
        id: 16,
        name: '芋头牛奶冰',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 25
      },
      17: {
        id: 17,
        name: '酸甜香芒雪砖',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 28
      },
      18: {
        id: 18,
        name: '相思绵芋雪砖',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 28
      },
      19: {
        id: 19,
        name: '蜜香花生雪砖',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 28
      },
      20: {
        id: 20,
        name: '古味雪花冰',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 28
      },
      21: {
        id: 21,
        name: '香芋雪花冰',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 28
      },
      22: {
        id: 22,
        name: '草莓雪花冰',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 32
      },
      23: {
        id: 23,
        name: '台式Q麻薯',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 22
      },
      24: {
        id: 24,
        name: '爆米花',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '焦糖牛奶/榛果巧克力',
        price: 30
      },
      25: {
        id: 25,
        name: '海苔酥',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '原味/辣味/芥末',
        price: 18
      },
      26: {
        id: 26,
        name: '冰糕拼盘',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '绿豆or红豆冰糕+原味or仙草麻薯',
        price: 22
      },
      27: {
        id: 27,
        name: '双福拼盘',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '黑糖花生or黑糖芝麻大福+双桂水晶冻',
        price: 22
      },
      28: {
        id: 28,
        name: '豆花1号',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '豆花+绿豆+莲子+珍珠',
        price: 20
      },
      29: {
        id: 29,
        name: '豆花2号',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '豆花+地瓜+薏仁+珍珠',
        price: 20
      },
      30: {
        id: 30,
        name: '豆花3号',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '豆花+红豆+花生+珍珠',
        price: 20
      },
      31: {
        id: 31,
        name: '豆花4号',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '豆花+红豆+芋头+珍珠',
        price: 20
      },
      32: {
        id: 32,
        name: '豆花5号',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '豆花+花豆+粉黑粿+珍珠',
        price: 20
      },
      33: {
        id: 33,
        name: '鸡蛋布丁',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 16
      },
      34: {
        id: 34,
        name: '奶酪布丁',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 16
      },
      35: {
        id: 35,
        name: '芒果布丁',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 16
      },
      36: {
        id: 36,
        name: '综合布丁',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '鸡蛋+芒果+奶酪',
        price: 16
      },
      37: {
        id: 37,
        name: '红豆布丁（奶酪）',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 16
      },
      38: {
        id: 38,
        name: '芋圆布丁（鸡蛋）',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 16
      },
      39: {
        id: 39,
        name: '珍珠布丁（芒果）',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 16
      },
      40: {
        id: 40,
        name: '招牌红茶',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 10
      },
      41: {
        id: 41,
        name: '招牌绿茶',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 10
      },
      42: {
        id: 42,
        name: '仙草干茶',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 10
      },
      43: {
        id: 43,
        name: '招牌奶茶',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 12
      },
      44: {
        id: 44,
        name: '招牌奶绿',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 12
      },
      45: {
        id: 45,
        name: '珍珠鲜奶茶',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 14
      },
      46: {
        id: 46,
        name: '珍珠鲜奶绿',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 14
      },
      47: {
        id: 47,
        name: '仙草鲜奶茶',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 14
      },
      48: {
        id: 48,
        name: '黄金柚子茶',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 14
      },
      49: {
        id: 49,
        name: '冬瓜茶（冰）',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 10
      },
      50: {
        id: 50,
        name: '冬瓜柠檬茶（冰）',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 12
      },
      51: {
        id: 51,
        name: '冬瓜鲜奶茶（冰）',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 12
      },
      52: {
        id: 52,
        name: '冬瓜仙草冻（冰）',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 12
      },
      53: {
        id: 53,
        name: '仙草冻奶茶（冰）',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 12
      },
      54: {
        id: 54,
        name: '仙草冻奶冻',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 16
      },
      55: {
        id: 55,
        name: '小芋圆冬瓜茶（冰）',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 16
      },
      56: {
        id: 56,
        name: '凤柠冬瓜茶（冰）',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 16
      },
      57: {
        id: 57,
        name: '原味紫米粥',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 17
      },
      58: {
        id: 58,
        name: '珍珠紫米粥',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 18
      },
      59: {
        id: 59,
        name: '椰香紫米粥',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 18
      },
      60: {
        id: 60,
        name: '芋圆紫米粥',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 20
      },
      61: {
        id: 61,
        name: '紫米粥鲜奶',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 20
      },
      62: {
        id: 62,
        name: '绿豆',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 2
      },
      63: {
        id: 63,
        name: '红豆',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 2
      },
      64: {
        id: 64,
        name: '薏仁',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 2
      },
      65: {
        id: 65,
        name: '黑糖粉粿',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 2
      },
      66: {
        id: 66,
        name: '花生',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 2
      },
      67: {
        id: 67,
        name: '花豆珍珠',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 2
      },
      68: {
        id: 68,
        name: '仙草冻',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 2
      },
      69: {
        id: 69,
        name: '布丁',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 2
      },
      70: {
        id: 70,
        name: '大芋圆',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 3
      },
      71: {
        id: 71,
        name: '小芋圆',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 3
      },
      72: {
        id: 72,
        name: '地瓜',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 3
      },
      73: {
        id: 73,
        name: '莲子',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 3
      },
      74: {
        id: 74,
        name: '芋头',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 3
      },
      75: {
        id: 75,
        name: '水晶圆',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 3
      },
      76: {
        id: 76,
        name: '冰淇淋',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 5
      },
      77: {
        id: 77,
        name: '豆香水晶圆',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '',
        price: 5
      },
      78: {
        id: 78,
        name: '换料须知',
        pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
        sold: 1014,
        desc: '相同价格的材料在备注中备注即可换料，不同价格只能加料',
        price: 0
      },






		},
		goodsList: [
			{
				id: 'yuyuan',
				classifyName: '芋圆系列',
				goods: [1, 2, 3, 4, 5]
			},
			{
				id: 'xiancao',
				classifyName: '仙草系列',
				goods: [6, 7,8,9,10,11,12]
			},
			{
				id: 'bingpin',
				classifyName: '清凉冰品',
				goods: [13,14,15,16,17,18,19,20,21,22]
			},
			{
				id: 'dianxin',
				classifyName: '招牌点心',
				goods: [23, 24,25,26,27]
			},
			{
				id: 'douhua',
				classifyName: '豆花系列',
				goods: [28,29,30,31,32]
			},
      {id: 'buding',
      classifyName: '布丁系列',
      goods: [33,34,35,36,37,38,39]
			},
      {
        id: 'chapin',
        classifyName: '茶品系列',
        goods: [40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56]
      },
      {
        id: 'zhou',
        classifyName: '紫米粥系列',
        goods: [57,58,59,60,61]
      },
      {
        id: 'jialiao',
        classifyName: '加料换料',
        goods: [78,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77]
      },
		],
		cart: {
			count: 0,
			total: 0,
			list: {}
		},
		showCartDetail: false
	},
	onLoad: function (options) {
		var shopId = options.id;
		for (var i = 0; i < app.globalData.shops.length; ++i) {
			if (app.globalData.shops[i].id == shopId) {
				this.setData({
					shop: app.globalData.shops[i]
				});
				break;
			}
		}
	},
	onShow: function () {
		this.setData({
			classifySeleted: this.data.goodsList[0].id
		});
	},
	tapAddCart: function (e) {
		this.addCart(e.target.dataset.id);
	},
	tapReduceCart: function (e) {
		this.reduceCart(e.target.dataset.id);
	},
	addCart: function (id) {
		var num = this.data.cart.list[id] || 0;
		this.data.cart.list[id] = num + 1;
		this.countCart();
	},
	reduceCart: function (id) {
		var num = this.data.cart.list[id] || 0;
		if (num <= 1) {
			delete this.data.cart.list[id];
		} else {
			this.data.cart.list[id] = num - 1;
		}
		this.countCart();
	},
	countCart: function () {
		var count = 0,
			total = 0;
		for (var id in this.data.cart.list) {
			var goods = this.data.goods[id];
			count += this.data.cart.list[id];
			total += goods.price * this.data.cart.list[id];
		}
		this.data.cart.count = count;
		this.data.cart.total = total;
		this.setData({
			cart: this.data.cart
		});
	},
	follow: function () {
		this.setData({
			followed: !this.data.followed
		});
	},
	onGoodsScroll: function (e) {
		if (e.detail.scrollTop > 10 && !this.data.scrollDown) {
			this.setData({
				scrollDown: true
			});
		} else if (e.detail.scrollTop < 10 && this.data.scrollDown) {
			this.setData({
				scrollDown: false
			});
		}

		var scale = e.detail.scrollWidth / 570,
			scrollTop = e.detail.scrollTop / scale,
			h = 0,
			classifySeleted,
			len = this.data.goodsList.length;
		this.data.goodsList.forEach(function (classify, i) {
			var _h = 70 + classify.goods.length * (46 * 3 + 20 * 2);
			if (scrollTop >= h - 100 / scale) {
				classifySeleted = classify.id;
			}
			h += _h;
		});
		this.setData({
			classifySeleted: classifySeleted
		});
	},
	tapClassify: function (e) {
		var id = e.target.dataset.id;
		this.setData({
			classifyViewed: id
		});
		var self = this;
		setTimeout(function () {
			self.setData({
				classifySeleted: id
			});
		}, 100);
	},
	showCartDetail: function () {
		this.setData({
			showCartDetail: !this.data.showCartDetail
		});
	},
	hideCartDetail: function () {
		this.setData({
			showCartDetail: false
		});
	},

  toCount:function(e){
    console.log("下单商品")
    console.log(this.data.cart.list)
    var list=JSON.stringify(this.data.cart.list);
    console.log(list)
      wx.navigateTo({
        url: "/page/count/count?list="+list,
      })
  },

  formSubmit: function (e) { 
    console.log('form发生了submit事件，携带数据为：', e.detail.value); 
     },


});

