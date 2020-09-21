import React from 'react'
import './App.less'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import TextMenu from './Components/TextMenu'

import Login from './Views/Login/Login'
import Home from './Views/Home/Home'

const PCMain: React.FC = () => {

  const _localstorage = localStorage.getItem('token')

  const handleRenderRedirect = (page1: string, page2: string) => {
    return <Redirect to={_localstorage ? page1 : page2}></Redirect>
  }

  const handleRenderRoutes = () => {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={() => {
            return handleRenderRedirect('/home', 'login')
          }}></Route>
          <Route path={'/login'} component={() => {
            return <Login />
          }}></Route>
          <Route path={'/home'} component={() => {
            return _localstorage ? <Home /> : handleRenderRedirect('/home', 'login')
          }}></Route>
        </Switch>
      </HashRouter >
    )
  }

  return <div className="app-pc">
    {handleRenderRoutes()}
    <TextMenu />
  </div>
}

export default PCMain
