import React from 'react';
import color from './color';
import menu from './menu';
import popup from './popup';
import navbar from './navbar';
import cursor from './cursor';

const styleguide = [
  { name: 'color', render: color },
  { name: 'cursor', render: cursor },
  { name: 'menu', render: menu },
  { name: 'popup', render: popup },
  { name: 'navbar', render: navbar },
];

styleguide.decorator = (story) => <div className="h-100vh d-flex justify-content-center align-items-center">
  {story()}
</div>;

export default styleguide;