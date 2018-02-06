import React from 'react';
import { observer } from 'mobx-react';
import Navbar from './components/Navbar';

const TurboApp = ({
  store
}) => (
  <div>
    <Navbar items={store.navItems} />
  </div>
);

export default observer(TurboApp);