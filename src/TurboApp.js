import React from 'react';
import { inject, observer } from 'mobx-react';
import Navbar from './components/Navbar';
import Window from './components/Window';
import Cursor from './components/Cursor';

const TurboApp = ({
  windowsStore,
  navStore
}) => (
  <div>
    <Cursor/>
    <Navbar store={navStore} />
    {windowsStore.windows.map(win => (
      <Window key={win.key} store={win}/>
    ))}
  </div>
);

export default inject('windowsStore', 'navStore')(observer(TurboApp));