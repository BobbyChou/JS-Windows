import React from 'react';
import ReactDOM from 'react-dom';
import PhoneMain from './PhoneMain';
import PCMain from './PCMain'
import * as serviceWorker from './serviceWorker';
import 'lib-flexible';
import { Device } from './utils/index'

ReactDOM.render(
  Device === 'phone' ? <React.StrictMode>
    <PhoneMain />
  </React.StrictMode> : <PCMain />,
  document.getElementById('root')
);

serviceWorker.unregister();
