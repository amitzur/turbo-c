import React from 'react';
import { action } from '@storybook/addon-actions';
import Navbar from '../src/components/Navbar';

const store = {
  items: [
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
  ],
  command: action('navbar command'),
};

export default () => <Navbar store={store} />