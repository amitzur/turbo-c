import React from 'react';
import Navbar from '../src/components/Navbar';

const store = {
  navItems: [
    { text: 'File', items: [
      { text: 'No shortcut' },
      { text: 'Shortcut', shortcut: 'F12' },
      { text: 'Separator', separator: true },
      { text: 'Quit', shortcut: 'Alt+X'}
    ] },
    { text: 'Edit', items: [
      { text: 'Undo' },
      { text: 'Redo', shortcut: 'Ctrl+Q'}
    ] }
  ]
};

export default () => <Navbar store={store} />