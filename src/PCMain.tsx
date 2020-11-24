import React from 'react'
import './App.less'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import Login from './Views/Login/Login'
import Home from './Views/Home/Home'
import Mine from './Views/Mine/Mine'

const PCMain: React.FC = () => {
  const handleRenderRedirect = (path: string) => {
    return <Redirect to={localStorage.getItem('Account') ? path : 'login'}></Redirect>
  }

  const handleRenderRoutes = () => {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={() => { return handleRenderRedirect('home') }}></Route>
          <Route path={'/login'} component={Login}></Route>
          <Route path={'/home'} component={() => { return localStorage.getItem('Account') ? <Home /> : handleRenderRedirect('home') }}></Route>
          <Route path={'/mine'} component={() => { return localStorage.getItem('Account') ? <Mine /> : handleRenderRedirect('mine') }}></Route>
        </Switch>
      </HashRouter>
    )
  }

  return <div className="app-pc">
    {handleRenderRoutes()}
  </div>
}

export default PCMain
