import React from 'react';

const NavItem = ({ text, shortcut }) => (
  <div className="d-flex justify-content-between">
    <span>{text}</span>
    <span>{shortcut}</span>
  </div>
);

export default NavItem;