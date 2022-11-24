const app = getApp()
Page({
  data: {
    active: '⾸页',
    title: '⾸页',
    list: [{
      "pagePath": "/pages/index/index",
      "text": "首页",
      "iconPath": "/images/tab/homepage.png",
      "selectedIconPath": "/images/tab/actived-homepage.png",
      "index": 0,
      "isShow": true,
    }, {
      // info: 2,
      "pagePath": "/pages/notice/notice",
      "text": "通知",
      "iconPath": "/images/tab/notice.png",
      "selectedIconPath": "/images/tab/actived-notice.png",
      "index": 1,
      "isShow": true,
    }, {
      "pagePath": "/pages/task/task",
      "text": "任务",
      "iconPath": "/images/tab/task.png",
      "selectedIconPath": "/images/tab/actived-task.png",
      "index": 2,
      "isShow": true,
    }, {
      "pagePath": "/pages/my/my",
      "text": "我的",
      "iconPath": "/images/tab/my.png",
      "selectedIconPath": "/images/tab/actived-my.png",
      "index": 3,
      "isShow": true,
    }]
  },
  onShow () {
    console.log(this.data.list,"list")
  },
  onLoad() {
 
    try { // 刚进页⾯时判断第⼀个tab
      console.log("ddd",this.data.list)
      this.data.list.forEach((item) => {
        if (item.isShow) {
          this.setData({
            active: item.text,
            // title: item.text
          })
          throw ('循环停⽌')
        }
      })
    } catch (e) {
      console.log(e)
    }
  },
  onChange(event) {
   
    this.setData({
      active: event.detail,
      // title: event.detail
    })
     console.log(event,this.data.active)
  }
})