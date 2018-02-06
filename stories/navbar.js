import React from 'react';
import Navbar from '../src/components/Navbar';

const items = [
  { text: 'File', items: [] },
  { text: 'Edit', items: [] },
];

export default () => <Navbar items={items} />