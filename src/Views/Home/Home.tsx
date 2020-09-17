import React from 'react'
import './Home.less'

// interface listItem {
//   icon: ImageBitmap,
//   name: string
// }
const Home: React.FC = (props) => {
  const DeskMenu: Array<{
    icon: any,
    name: string
  }> = [
      { icon: require('../../img/PCImg/icon_pc.png'), name: '我的电脑' },
      { icon: require('../../img/PCImg/icon_rubbish.png'), name: '回收站' },
      { icon: require('../../img/PCImg/icon_control.png'), name: '控制面板' },
    ]

  return (
    <div className="home-container">
      {DeskMenu.map((item, index) => {
        return (
          <div className="addlist-item">
            <img src={item.icon} alt="" />
            <div className="addlist-item-font">{item.name}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Home