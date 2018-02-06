import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import TurboApp from './TurboApp';
import appStore from './stores/app';

ReactDOM.render(<TurboApp store={appStore} />, document.getElementById('root'));
