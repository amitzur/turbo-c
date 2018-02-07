import React from 'react';
import { observer } from 'mobx-react';
import Navbar from './components/Navbar';
import Window from './components/Window';


// TODO why like this

const TurboApp = ({
  store
}) => (
  <div>
    <Navbar items={store.navItems} />
    {store.windows.map(window => (
      <Window
        key={window.name}
        onClose={store.closeWindow}
        onMouseDown={store.focusWindow}
        onDrag={(name, dim) => store.updateWindow(window.name, dim)}
        {...window}
      >{window.name}</Window>
    ))}
  </div>
);

export default observer(TurboApp);