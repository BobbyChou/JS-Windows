import React from 'react'
import './App.less'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './Views/Login/Login'
import Home from './Views/Home/Home'

const PCMain: React.FC = () => {

  return <div className="app-pc">
    <BrowserRouter>
      <Switch>
        <Route path={'/'} component={() => {
          if (!window.localStorage.getItem('token')) {
            return <Login />
          }
          return <Home />
        }}></Route>
        <Route path={'/home'} component={() => {
          if (!window.localStorage.getItem('token')) {
            return <Login />
          }
          return <Home />
        }}></Route>
      </Switch>
    </BrowserRouter>
  </div>
}

export default PCMain
