import React from 'react';
import Navbar from '../src/components/Navbar';

const store = {
  navItems: [
    { text: 'File', items: [] },
    { text: 'Edit', items: [] }
  ]
};

export default () => <Navbar store={store} />