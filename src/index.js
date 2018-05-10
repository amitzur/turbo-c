import './sass/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import TurboApp from './TurboApp';
import { Provider } from 'mobx-react';
import {initData} from './Data';

import windowsStore from './stores/windowsStore';
import navStore from './stores/navStore';

const stores = {
  windowsStore,
  navStore
};

initData(stores);
window.__s = stores;

ReactDOM.render((
  <Provider {...stores}>
    <TurboApp />
  </Provider>
), document.getElementById('root'));
