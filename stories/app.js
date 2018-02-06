import React from 'react';
import { observable } from 'mobx';
import TurboApp from '../src/TurboApp';

class Store {
  @observable navItems = [
    { text: 'Menu 1', items: [
      { text: 'Item 1.1' },
      { text: 'Item 1.2', separator: true },
      { text: 'item 1.3', shortcut: 'F3' }
    ]},
    { text: 'Menu 2', items: [
      { text: 'Item 2.1' },
      { text: 'Item 2.2' },
    ]}
  ];
}

const store = new Store();

export default [
  { name: 'navbar', render: () => <TurboApp store={store} /> }
]