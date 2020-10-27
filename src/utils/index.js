/*
 * @Author: zhou teng
 * @Date: 2020-09-17 18:07:56
 * @LastEditTime: 2020-10-26 16:51:34
 */

/**
 * 判断当前的设备是PC端还是手机端
 */
export const PUBLIC_KEY = 'zhouteng5201314'

/** 判断当前设备 */
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

/** 鼠标右键菜单事件 */
export const getMouseLocation = (location) => {
  console.log(111)
  if (document.getElementsByClassName('textmenu-container')[0]) {
    document.getElementsByClassName('textmenu-container')[0].style.left = location[0] + 'px'
    document.getElementsByClassName('textmenu-container')[0].style.top = location[1] + 'px'
  } else {
    let _addEl = document.createElement('div')
    _addEl.setAttribute('class', 'textmenu-container')
    _addEl.innerHTML = `
    <ul class="menu-list">
      <li class='menu-item-checkout'>查看</li>
      <li class='menu-item-liststyle'>排序方式</li>
      <li class='menu-item-refresh'>刷新</li>
      <li class='menu-item-create'>新建</li>
      <li class='menu-item-style'>个性化</li>
    </ul>
    `
    _addEl.addEventListener('click', function (e) {
      let _deleteEl = document.getElementsByClassName('textmenu-container')[0]
      document.getElementsByClassName('app-pc')[0].removeChild(_deleteEl)
      switch (e.target.getAttribute('class')) {
        case 'menu-item-refresh':
          let el = document.getElementsByClassName('home-container')[0]
          el.setAttribute('class', 'home-container none')
          setTimeout(() => {
            el.setAttribute('class', 'home-container')
          }, 180);
          break;
        default:
          break;
      }
    })
    _addEl.style.display = 'block'
    _addEl.style.left = location[0] + 'px'
    _addEl.style.top = location[1] + 'px'
    document.getElementsByClassName('app-pc')[0].appendChild(_addEl)
  }
}

export const deleteTextMenu = () => {
  let _deleteEl = document.getElementsByClassName('textmenu-container')[0]
  let _root = document.getElementsByClassName('app-pc')[0]
  _root && _deleteEl && _root.removeChild(_deleteEl)
}