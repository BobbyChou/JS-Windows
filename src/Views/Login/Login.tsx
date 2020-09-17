import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Login.less'


const Login: React.FC = () => {

  const [userName, setUserName] = useState('')
  const userInput = useRef(null)
  const history = useHistory()

  // 禁用鼠标右键，自己封装右键功能列表
  window.onload = () => {
    document.oncontextmenu = function (evt) {
      evt.returnValue = false;
      console.log(evt)
    };
  }

  document.onkeydown = function (e) {
    if (e.keyCode === 13 && userName) {
      window.localStorage.setItem('token', userName)
      history.push('home')
    }
  }

  useEffect(() => {
    let el = userInput.current
  }, [])

  const _handleChangeInput = (e: any) => {
    let _reg = new RegExp('^[A-Za-z0-9]+$')
    _reg.test(e.target.value) && setUserName(e.target.value)
  }

  return (
    <div className="login-container">
      <div className="login-avatart">
        <img src={require('../../img/PCImg/icon_userAvatar.png')} alt="" />
      </div>
      <div className="login-userinput">
        <input value={userName} onChange={(e) => { _handleChangeInput(e) }} ref={userInput} type="password" className="userpassword" />
        <img className="login-toright" src={require('./../../img/PCImg/icon_toright.png')} alt="" />
      </div>
    </div>
  )
}

export default Login