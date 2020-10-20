import React, { useState, useEffect } from 'react'
import './Home.less'
import { getMouseLocation, deleteTextMenu } from './../../utils'
import Toast from '../../Components/Toast'
import Item from 'antd/lib/list/Item'

interface DeskMenu {
  icon: any,
  title: string
}

let timer: any = null

const Home: React.FC = () => {

  const DeskMenu: Array<DeskMenu> = [
    { icon: 'icon_pc', title: '我的电脑' },
    { icon: 'icon_rubbish', title: '回收站' },
    { icon: 'icon_control', title: '控制面板' },
    { icon: 'icon_browser', title: '浏览器' }
  ]
  const [currentItem, setCurrentItem] = useState<string>('')
  const [currentItemIdx, setCurrentItemIdx] = useState<any>(null)
  const [showToast, setShowToast] = useState<boolean>(false)
  const [bottomList, setBototmList] = useState<Array<{
    title?: string,
    icon: any
  }>>([])

  useEffect(() => {
    // 鼠标右键事件
    document.oncontextmenu = function (evt) {
      let location = [evt.offsetX, evt.offsetY]
      localStorage.setItem('showTextMenu', 'true')
      getMouseLocation(location)
      evt.returnValue = false;
    };

    // 鼠标拖拽事件
    document.ondragstart = function (evt) {
      evt.returnValue = false
    };

    // 点击事件
    document.onclick = function (evt) {
      setCurrentItemIdx(null)
      evt.returnValue = false
      if (localStorage.getItem('showTextMenu') === 'true') {
        localStorage.setItem('showTextMenu', 'false')
        deleteTextMenu()
      }
    }
  }, [])

  /**
   * 判断当前点击item是单机还是双击
   * @param item 当前的点击项
   * @param index 当前点击的item的下标
   */
  const _handleChangeSelectItem = (item: { title: string, icon: any }, index: number) => {
    // 判断当前是单机还是双击
    setCurrentItemIdx(index)
    if (currentItem) {
      if (!bottomList.includes(item)) {
        let _list = bottomList.slice(0)
        _list.push({
          title: item.title,
          icon: item.icon
        })
        setBototmList(_list)
      }
      if (currentItem === '浏览器') {
        setShowToast(true)
      }
      clearTimeout(timer)
      return setCurrentItem('')
    }
    setCurrentItem(item.title)
    timer = setTimeout(() => {
      setCurrentItem('')
    }, 300);
  }

  /** 修改show */
  const toggleShow = (val: boolean) => {
    setShowToast(val)
  }

  /** 删除一项 */
  const deleteAppItem = (item: { title: any, icon: any }) => {
    console.log(item)
    // let _list = bottomList.filter((appItem) => {
    //   return appItem.title !== item.title
    // })
    // setBototmList(_list)
  }

  return (
    <div className="home-box">
      <div className="home-container">
        {DeskMenu.map((item, index) => {
          return (
            <div className={index === currentItemIdx ? "addlist-item hover" : "addlist-item"} onClick={(e) => { _handleChangeSelectItem(item, index) }} key={`${item}${index}`}>
              <img src={require(`../../img/PCImg/${item.icon}.png`)} alt="" />
              <div className="addlist-item-font">{item.title}</div>
            </div>
          )
        })}
        <Toast deleteAppItem={deleteAppItem} toggleShow={toggleShow} show={showToast} />
      </div>
      <div className="home-botton-container">
        <div className="home-botton-logo">
          <img src={require('../../img/PCImg/icon_windows.png')} alt="" />
        </div>
        <div className="home-botton-apps">
          {bottomList.map((item) => {
            return (
              <div className="apps-item">
                <img src={require(`../../img/PCImg/${item.icon}.png`)} alt="" />
              </div>
            )
          })}
        </div>
      </div>
    </div>

  )
}

export default Home