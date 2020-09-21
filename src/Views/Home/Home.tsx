import React, { useState } from 'react'
import './Home.less'
import { getMouseLocation, deleteTextMenu } from './../../utils'
import Toast from '../../Components/Toast'

const Home: React.FC = () => {

  const [currentItem, setCurrentItem] = useState<any>('')
  let appClickFlag: boolean = false, appClickTimer = null

  window.onload = () => {
    document.oncontextmenu = function (evt) {
      let location = [evt.offsetX, evt.offsetY]
      localStorage.setItem('showTextMenu', 'true')
      getMouseLocation(location)
      evt.returnValue = false;
    };

    document.ondragstart = function (evt) {
      evt.returnValue = false
    };

    document.onclick = function (evt) {
      evt.returnValue = false
      if (localStorage.getItem('showTextMenu') === 'true') {
        localStorage.setItem('showTextMenu', 'false')
        deleteTextMenu()
      }
    }
  }

  var ws = new WebSocket('ws://localhost:9898/test');
  // 响应onmessage事件:
  // ws.onmessage = function (msg) { console.log(msg); };
  // 给服务器发送一个字符串:
  // ws.send('Hello!');

  const _handleChangeSelectItem = (index: number) => {
    setCurrentItem(index)

    // 判断当前是单机还是双击

  }

  const DeskMenu: Array<{
    icon: any,
    name: string
  }> = [
      { icon: require('../../img/PCImg/icon_pc.png'), name: '我的电脑' },
      { icon: require('../../img/PCImg/icon_rubbish.png'), name: '回收站' },
      { icon: require('../../img/PCImg/icon_control.png'), name: '控制面板' },
      { icon: require('../../img/PCImg/icon_browser.png'), name: '浏览器' }
    ]

  return (
    <div className="home-container">
      {DeskMenu.map((item, index) => {
        return (
          <div className={index === currentItem ? "addlist-item hover" : "addlist-item"} onClick={() => { _handleChangeSelectItem(index) }} key={`${item}${index}`}>
            <img src={item.icon} alt="" />
            <div className="addlist-item-font">{item.name}</div>
          </div>
        )
      })}
      <Toast />
    </div>
  )
}

export default Home