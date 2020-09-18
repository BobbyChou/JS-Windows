import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Login.less'
import { editWidth } from '../../utils'


const Login: React.FC = () => {


  const [userName, setUserName] = useState('Administrator')
  const [userPassword, setUserPassword] = useState('')
  const userInput = useRef(null)
  const userContent = useRef(null)
  const history = useHistory()

  // 禁用鼠标右键，自己封装右键功能列表
  window.onload = () => {
    document.oncontextmenu = function (evt) {
      evt.returnValue = false;
    };
  }

  // document.onkeydown = function (e) {
  //   if (e.keyCode === 13 && userName) {
  //     window.localStorage.setItem('token', userName)
  //     history.push('home')
  //   }
  // }

  const _handleChangeInput = (e: any) => {
    let _reg = new RegExp('^[A-Za-z0-9]+$')
    _reg.test(e.target.value) && setUserName(e.target.value)
  }

  const _handleShowAllUser = () => {
    editWidth(userContent.current)
  }

  const _handleLogin = () => {
    fetch('http://localhost:9002/login', {
      mode: "no-cors",
      method: 'get'
    }).then((res) => {
      console.log(res)
    })
  }

  return (
    <div className="login-container">
      <div className="login-avatart">
        <img src={require('../../img/PCImg/icon_userAvatar.png')} alt="" />
      </div>
      <div className="username-container">{userName}</div>
      <div className="login-userinput">
        <input ref={userInput} type="password" className="userpassword" />
        <img onClick={() => { _handleLogin() }} className="login-toright" src={require('./../../img/PCImg/icon_toright.png')} alt="" />
      </div>
      <div ref={userContent} className="change-container" onClick={() => { _handleShowAllUser() }}>
        <img src={require('imageCommon/PCImg/icon_changeAccount.png')} alt="" />
      </div>
    </div>
  )
}

export default Login