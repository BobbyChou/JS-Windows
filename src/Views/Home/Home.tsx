import React from 'react'
import './Home.less'
import { getMouseLocation, deleteTextMenu } from './../../utils'

const Home: React.FC = () => {

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

  const DeskMenu: Array<{
    icon: any,
    name: string
  }> = [
      { icon: require('../../img/PCImg/icon_pc.png'), name: '我的电脑' },
      { icon: require('../../img/PCImg/icon_rubbish.png'), name: '回收站' },
      { icon: require('../../img/PCImg/icon_control.png'), name: '控制面板' }
    ]

  return (
    <div className="home-container">
      {DeskMenu.map((item, index) => {
        return (
          <div className="addlist-item" key={`${item}${index}`}>
            <img src={item.icon} alt="" />
            <div className="addlist-item-font">{item.name}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Home