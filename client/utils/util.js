// function formatTime(time) {
//   if (typeof time !== 'number' || time < 0) {
//     return time
//   }

//   var hour = parseInt(time / 3600)
//   time = time % 3600
//   var minute = parseInt(time / 60)
//   time = time % 60
//   var second = time

//   return ([hour, minute, second]).map(function (n) {
//     n = n.toString()
//     return n[1] ? n : '0' + n
//   }).join(':')
// }

// function countdown(time) {

//     if (typeof time !== 'number' || time < 0) {
//         return time
//     }
//     setInterval(function(){
//         return (time/1000) - 1
//     }, 1000)
// }

module.exports = {
  formatTime: formatTime,
  // countdown: countdown
}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


// 显示繁忙提示
var showBusy = text => wx.showToast({
  title: text,
  icon: 'loading',
  duration: 10000
})

// 显示成功提示
var showSuccess = text => wx.showToast({
  title: text,
  icon: 'success'
})

// 显示失败提示
var showModel = (title, content) => {
  wx.hideToast();

  wx.showModal({
    title,
    content: JSON.stringify(content),
    showCancel: false
  })
}

module.exports = { formatTime, showBusy, showSuccess, showModel }
