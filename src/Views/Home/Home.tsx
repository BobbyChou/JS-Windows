import React, { useState, useEffect } from 'react'
import './Home.less'
import { getMouseLocation, deleteTextMenu } from './../../utils'
import AppDocker from '../../Components/AppDocker'

interface DeskMenu {
  icon: any,
  title: string
}
interface appItem {
  icon: any,
  title: string,
  show: boolean
}
let timer: any = null

const Home: React.FC = () => {
  /** 电脑桌面图标列表 */
  const DeskMenu: Array<DeskMenu> = [
    { icon: 'icon_pc', title: '我的电脑' },
    { icon: 'icon_rubbish', title: '回收站' },
    { icon: 'icon_control', title: '控制面板' },
    { icon: 'icon_browser', title: '浏览器' },
    { icon: 'icon_vue', title: 'vue' },
    { icon: 'icon_react', title: 'react' }
  ]
  const [currentItem, setCurrentItem] = useState<string>('')
  const [currentItemIdx, setCurrentItemIdx] = useState<any>(null)
  const [appDockerList, setAppDockerList] = useState<Array<appItem>>([])
  const [bottomList, setBototmList] = useState<Array<DeskMenu>>([])

  useEffect(() => {
    // 鼠标右键事件
    document.oncontextmenu = function (evt) {
      let location = [evt.offsetX, evt.offsetY]
      localStorage.setItem('showTextMenu', 'true')
      getMouseLocation(location)
      evt.returnValue = false;
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

  /** 判断当前点击item是单机还是双击 */
  const _handleChangeSelectItem = (item: { title: string, icon: any }, index: number) => {
    setCurrentItemIdx(index)
    if (currentItem && item.title === 'vue') {
      if (bottomList.filter((item) => { return item.title === currentItem }).length < 1) {
        setAppDockerList([...appDockerList, { ...item, ...{ show: true } }])
        setBototmList([...bottomList, item])
      } else if (appDockerList.filter((item) => { return item.title === currentItem }).length < 1) {
        setAppDockerList([...appDockerList, { ...item, ...{ show: true } }])
      }
      clearTimeout(timer)
      return setCurrentItem('')
    }
    setCurrentItem(item.title)
    timer = setTimeout(() => {
      setCurrentItem('')
    }, 300);
  }

  /** 点击显示桌面 */
  const handleShowDeskstop = () => {
    setAppDockerList([])
  }

  /** 最小化一项 */
  const hiddenAppItem = (index: number, show: boolean) => {
    let _appDockerList = appDockerList.slice(0)
    _appDockerList.splice(index, 1)
    setAppDockerList(_appDockerList)
  }

  /** 删除一项 */
  const deleteAppItem = (index: number) => {
    let _appDockerList = appDockerList.slice(0)
    let _bottomList = bottomList.slice(0)
    _appDockerList.splice(index, 1)
    _bottomList.splice(index, 1)
    setAppDockerList(_appDockerList)
    setBototmList(_bottomList)
  }

  /** 显示隐藏 */
  const toggleShow = (data: any) => {
    let flag = true, _index = 0
    for (let i = 0; i < appDockerList.length; i++) {
      if (appDockerList[i].title === data.title) {
        flag = false
        _index = i
      }
    }
    if (flag) {
      return setAppDockerList([...appDockerList, { ...data, ...{ show: true } }])
    }
    let _appDockerList = appDockerList.slice(0)
    _appDockerList.splice(_index, 1)
    setAppDockerList(_appDockerList)
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
        <AppDocker
          appDockerList={appDockerList}
          deleteAppItem={deleteAppItem}
          hiddenAppItem={hiddenAppItem}
        />
      </div>
      <div className="home-botton-container">
        <div className="home-botton-logo">
          <img src={require('../../img/PCImg/icon_windows.png')} alt="" />
        </div>
        <div className="home-botton-apps">
          {bottomList.map((item, index) => {
            return (
              <div className="apps-item" key={index} onClick={() => { toggleShow(item) }}>
                <img src={require(`../../img/PCImg/${item.icon}.png`)} alt="" />
              </div>
            )
          })}
        </div>
        <div className="show-deskstop" onClick={handleShowDeskstop}></div>
      </div>
    </div>
  )
}

export default Home