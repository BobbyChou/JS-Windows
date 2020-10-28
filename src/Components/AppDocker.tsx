import React, { useRef, useState, useEffect } from 'react'
import './AppDocker.less'

interface appItem {
  icon: any,
  title: string,
  show: boolean
}

interface props {
  deleteAppItem: Function,
  hiddenAppItem: Function,
  appDockerList: Array<appItem>
}

let doubleClickFlag: boolean = false
let doubleClickTimer: any = null

const Toast: React.FC<props> = (props: props) => {

  const box: React.RefObject<HTMLInputElement> = useRef(null)
  const [browserSize, setBrowserSize] = useState('normal')

  useEffect(() => {
    let els: any = document.getElementsByClassName('browser-title-container')
    for (let item of els) {
      item.ondragstart = (e: any) => {
        console.log(11111)
      }
    }
  }, [props.appDockerList])

  const changeBrowserSize = () => {
    clearTimeout(doubleClickTimer)
    if (doubleClickFlag) {
      browserSize === 'normal' ? setBrowserSize('large') : setBrowserSize('normal')
      doubleClickTimer = false
      clearTimeout(doubleClickTimer)
    }
    doubleClickFlag = true
    doubleClickTimer = setTimeout(() => {
      doubleClickFlag = false
    }, 300);
  }

  /** 获取browser-container的className */
  const getElementClassName = () => {
    switch (browserSize) {
      case 'normal':
        return 'browser-container normal'
      case 'large':
        return 'browser-container large'
      case 'close':
        return 'browser-container close'
      default:
        return 'browser-container'
    }
  }

  return <div className="toast-container">
    {props.appDockerList && props.appDockerList.map((item, index) => {
      return (
        item.show ? <div key={`${index}`} onDragStartCapture={(e) => { console.log(e.target) }} style={{ top: 120 - 20 * index + 'px', left: 120 - 20 * index + 'px' }} className={getElementClassName()} ref={box}>
          <div className='browser-title-container' onClick={() => { changeBrowserSize() }}>
            <div className="icon-contianer">
              <span onClick={() => { props.hiddenAppItem(index, !item.show) }}>{'一'}</span>
              <span onClick={() => { setBrowserSize(browserSize === 'large' ? 'normal' : 'large') }}>{'□'}</span>
              <span onClick={() => { props.deleteAppItem(index) }}>{'X'}</span>
            </div>
          </div>
          {/* <iframe title='1' src="http://47.101.171.221/xrc/" className="iframe-container"></iframe> */}
          <iframe title='1' src="http://localhost:9002" className="iframe-container"></iframe>
        </div> : null
      )
    })}
  </div>
}

export default Toast