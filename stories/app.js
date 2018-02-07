import React from 'react';
import TurboApp from '../src/TurboApp';
import App from '../src/stores/app';
import Button from '../src/components/Button';

export default [
  { name: 'navbar', render: () => {

    const store = new App({
      navItems: [
        { text: 'Menu 1', items: [
          { text: 'Item 1.1' },
          { text: 'Item 1.2', separator: true },
          { text: 'item 1.3', shortcut: 'F3' }
        ]},
        { text: 'Menu 2', items: [
          { text: 'Item 2.1' },
          { text: 'Item 2.2' },
        ]}
      ],

      windows: [
        { top: 200, left: 100, width: 500, height: 300, name: "File 1.rs", zIndex: 1 },
        { top: 250, left: 150, width: 500, height: 300, name: "File 2.rs", zIndex: 2 },
      ]
    });

    window.__s = store;

    return <div>
      <TurboApp store={store} />
      <Button onClick={store.createFile}>New file</Button>
    </div>
  }}
]