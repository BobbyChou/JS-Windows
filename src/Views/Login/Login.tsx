import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Login.less'
import Account from './../../utils/Account'
import { message } from 'antd'

interface Named {
  name: string;
}

const Login: React.FC = () => {

  const [userName] = useState('zhou da pao')
  const [userPassword, setUserPassword] = useState('')
  const userInput = useRef(null)
  const userPwd = useRef(null)
  const userContent = useRef(null)
  const history = useHistory()

  /** 登录跳转到首页 */
  const _handleToHomePage = () => {
    if (Account[userName as 'zhou teng'] === userPassword) {
      localStorage.setItem('Account', userName)
      return history.push('/home')
    }
    message.error('登录密码错误')
    setUserPassword('')
  }

  useEffect(() => {
    /** 禁用鼠标右键，自己封装右键功能列表 */
    document.oncontextmenu = function (evt) {
      evt.returnValue = false;
    };

    /** 点击回车键登录 */
    document.onkeydown = function (e) {
      if (e.keyCode === 13 && userName) {
        _handleToHomePage()
      }
    }
  })

  /** 修改输入框 */
  const _handleChangeInput = (e: any) => {
    setUserPassword(e.currentTarget.value)
  }



  return (
    <div className="login-container">
      <div className="login-avatart">
        <img src={require('../../img/PCImg/icon_userAvatar.png')} alt="" />
      </div>
      <div className="username-container">{userName}</div>
      <div className="login-userinput">
        <input value={userPassword} ref={userInput} onChange={(e) => { _handleChangeInput(e) }} type="password" className="userpassword" />
        <img ref={userPwd} onClick={_handleToHomePage} className="login-toright" src={require('./../../img/PCImg/icon_toright.png')} alt="" />
      </div>
      <div ref={userContent} className="change-container">
        <img src={require('imageCommon/PCImg/icon_changeAccount.png')} alt="" />
      </div>
    </div>
  )
}

export default Login