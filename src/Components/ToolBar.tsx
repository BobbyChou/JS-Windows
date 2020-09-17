import React from 'react'
import { useHistory } from 'react-router-dom'

const ToolBar: React.FunctionComponent = (props) => {

  const ToolBarList: Array<{ title: string, icon: any }> = [
    { title: 'home', icon: require('imageCommon/ToolBarIcon/icon_home.png') },
    { title: 'group', icon: require('imageCommon/ToolBarIcon/icon_group.png') },
    { title: 'shop', icon: require('imageCommon/ToolBarIcon/icon_shop.png') },
    { title: 'history', icon: require('imageCommon/ToolBarIcon/icon_history.png') },
    { title: 'mine', icon: require('imageCommon/ToolBarIcon/icon_mine.png') },
  ]

  const history = useHistory()

  const _handleClick = (item: any, index: number) => {
    if (index === 1) {
      return history.push(`/${item.title}/123`)
    }
    history.push(item.title)
  }

  return (
    <div className="toolbar-container">
      {
        ToolBarList.map((item, index) => {
          return (
            <div onClick={() => { _handleClick(item, index) }} className="toolbar-item" key={`${index}${item.title}`}>
              <img className="toolbar-item-img" src={item.icon} alt="" />
            </div>
          )
        })
      }
    </div>
  )
}

export default ToolBar