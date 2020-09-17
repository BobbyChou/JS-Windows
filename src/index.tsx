import React from 'react';
import ReactDOM from 'react-dom';
import PhoneMain from './PhoneMain';
import PCMain from './PCMain'
import * as serviceWorker from './serviceWorker';
import 'lib-flexible';
import { BrowserRouter } from 'react-router-dom'
// import reducer from './Store/reducers'
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { IsPC } from './utils/index'

// const store = createStore(reducer);
const isPc: boolean = IsPC()

ReactDOM.render(
  !isPc ? <React.StrictMode>
    <BrowserRouter>
      <PhoneMain />
    </BrowserRouter>
  </React.StrictMode> : <PCMain />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
