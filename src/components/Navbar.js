import React from 'react';
import { observer } from 'mobx-react';
import Popup from './Popup';
import Menu from './Menu';
import NavItem from './NavItem';

const Navbar = ({ items }) => (
  <div className="d-flex bg-gray">
    {items.map(({ text, shortcut, items }) => (
      <Popup style={{zIndex: 1000}} key={text} text={text} className="bg-gray" render={({ close }) => (
        <Menu onIdleClick={close} items={items} onItemClick={() => {}} className="bg-gray ml--2" renderItem={menuItem => (
          <NavItem text={menuItem.text} shortcut={menuItem.shortcut} />
        )}/>
      )} />
    ))}
  </div>
);

export default observer(Navbar);