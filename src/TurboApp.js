import React from 'react';
import { observer } from 'mobx-react';
import Navbar from './components/Navbar';
import Window from './components/Window';
import Cursor from './components/Cursor';

const TurboApp = ({
  store
}) => (
  <div>
    <Cursor/>
    <Navbar store={store} />
    {store.windows.map(win => (
      <Window key={win.key} store={win}>{win.content}</Window>
    ))}
  </div>
);

export default observer(TurboApp);