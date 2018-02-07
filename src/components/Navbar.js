import React from 'react';
import { observer } from 'mobx-react';
import Popup from './Popup';
import Menu from './Menu';
import NavItem from './NavItem';

const Navbar = ({ store: { navItems, command } }) => (
  <div className="px-2 d-flex bg-gray">
    {navItems.map(({ text, shortcut, action, items }) => (
      <Popup style={{zIndex: 1000}} key={text} text={text} className="bg-gray" render={({ close }) => (
        <Menu
          onIdleClick={close}
          items={items.map(item => ({ ...item, key: item.text }))}
          onItemClick={item => {
            command(item.text);
            close();
          }}
          className="bg-gray ml--2"
          renderItem={menuItem => (
            <NavItem text={menuItem.text} shortcut={menuItem.shortcut} />
          )}
        />
      )} />
    ))}
  </div>
);

export default observer(Navbar);