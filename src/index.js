import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import TurboApp from './TurboApp';
import AppStore from './stores/app';
import DataManager from './DataManager';

const appStore = new AppStore({});
const dataManager = new DataManager(appStore);

ReactDOM.render(<TurboApp store={appStore} />, document.getElementById('root'));
