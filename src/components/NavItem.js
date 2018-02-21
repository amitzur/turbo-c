import React from 'react';
import Shortcut from './Shortcut';

const NavItem = ({ text, shortcut }) => (
  <div className="d-flex justify-content-between">
    <Shortcut text={text} charColor="red" ctrl />
    <span>{shortcut}</span>
  </div>
);

export default NavItem;