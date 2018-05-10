import React from 'react';
import TurboApp from '../src/TurboApp';
import Button from '../src/components/Button';
import {NavStore} from '../src/stores/navStore';
import {WindowsStore} from '../src/stores/windowsStore';

export default [
  { name: 'navbar', render: () => {

    const navStore = new NavStore();
    navStore.setItems([
      { text: 'Menu 1', items: [
        { text: 'Item 1.1' },
        { text: 'Item 1.2', separator: true },
        { text: 'item 1.3', shortcut: 'F3' }
      ]},
      { text: 'Menu 2', items: [
        { text: 'Item 2.1' },
        { text: 'Item 2.2' },
      ]}
    ]);

    const windowsStore = new WindowsStore();
    const win1 = windowsStore.createWindow({ top: 200, left: 100, width: 500, height: 300, name: "File 1.rs", zIndex: 1 });
    windowsStore.windowsRegistry.set(win1.name, win1);
    const win2 = windowsStore.createWindow({ top: 250, left: 150, width: 500, height: 300, name: "File 2.rs", zIndex: 2 });
    windowsStore.windowsRegistry.set(win2.name, win2);

    const stores = window.__s = {
      windowsStore,
      navStore,
    };

    const createFile = () => windowsStore.addWindow(`storybook file.rs`);

    return <div>
      <TurboApp {...stores} />
      <Button onClick={createFile}>New file</Button>
    </div>
  }}
]