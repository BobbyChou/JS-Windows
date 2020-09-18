import React from 'react'
import './TextMenu.less'

const TextMenu: React.FC = () => {

  const _handleRefresh = (e: any) => {
    let el = document.getElementsByClassName('home-container')[0]
    el.setAttribute('class', 'home-container none')
    setTimeout(() => {
      el.setAttribute('class', 'home-container')
    }, 180);
  }

  return (
    <div className="textmenu-container">
      <ul className="menu-list">
        <li>{'查看'}</li>
        <li>{'排序方式'}</li>
        <li onClick={(e) => {
          _handleRefresh(e)
        }}>{'刷新'}</li>
        <li>{'新建'}</li>
        <li>{'个性化'}</li>
      </ul>
    </div>
  )
}

export default TextMenu