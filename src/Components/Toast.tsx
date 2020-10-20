import React, { useRef, useState } from 'react'
import './Toast.less'

interface props {
  show: boolean,
  toggleShow: Function,
  deleteAppItem: Function
}

let doubleClickFlag: boolean = false
let doubleClickTimer: any = null

const Toast: React.FC<props> = (props: props) => {

  const box: React.RefObject<HTMLInputElement> = useRef(null)
  const [browserSize, setBrowserSize] = useState('normal')

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

  return props.show ? <div className="toast-container">
    <div className={getElementClassName()} ref={box}>
      <div className='browser-title-container' onClick={() => { changeBrowserSize() }}>
        <div className="icon-contianer">
          <span onClick={() => { setBrowserSize('close') }}>{'一'}</span>
          <span onClick={() => { setBrowserSize(browserSize === 'large' ? 'normal' : 'large') }}>{'□'}</span>
          <span onClick={() => { props.toggleShow() }}>{'X'}</span>
        </div>
      </div>
      <iframe title='1' src="http://www.baidu.com" className="iframe-container"></iframe>
    </div>
  </div> : null
}

export default Toast