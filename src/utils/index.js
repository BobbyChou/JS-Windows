/*
 * @Author: zhou teng
 * @Date: 2020-09-17 18:07:56
 * @LastEditTime: 2020-09-18 10:34:47
 */
import TextMenu from '../Components/TextMenu'

export const IsPC = () => {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
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