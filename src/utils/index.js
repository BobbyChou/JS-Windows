/*
 * @Author: zhou teng
 * @Date: 2020-09-17 18:07:56
 * @LastEditTime: 2020-10-15 10:22:18
 */

/**
 * 判断当前的设备是PC端还是手机端
 */
export const PUBLIC_KEY = 'zhouteng5201314'

export const Device = (function () {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag ? 'PC' : 'phone';
})()

/**
 * 模拟账号-判断当前登录密码是否正确
 * @param {account, pwd}  
 */
export const checkPwd = (pwd) => {

}

export const getMouseLocation = (location) => {
  let _root = document.getElementsByClassName('textmenu-container')[0]
  _root.style.display = 'block'
  _root.style.left = location[0] + 'px'
  _root.style.top = location[1] + 'px'
}

export const deleteTextMenu = () => {
  let _root = document.getElementsByClassName('textmenu-container')[0]
  _root.style.display = 'none'
}

export const editWidth = (el) => {
  console.log(el)
}