import React from 'react';
import cn from 'classnames';

const itemClick = (item, onClick) => (e) => {
  e.stopPropagation();
  onClick(item);
};

const MenuItem = ({ item, onClick, render }) => {
  const { disabled, selected, separator } = item;
  return <li>
    <div
      onClick={onClick}
      className={cn('mx-1 px-2 clickable', {
        'bg-black text-gray-dark': selected,
        'text-gray-dark': disabled
      })}
    >
      {render(item)}
    </div>
    {separator && <div className="border-top border-black my-2" />}
  </li>
};

const Menu = ({ items, renderItem, onItemClick, onIdleClick, className }) => (
  <div className={cn("p-2", className)} onClick={onIdleClick}>
    <ul className="py-2 border border-black">
      { items.map(item => (
        <MenuItem
          key={item.key}
          onClick={!item.disabled && itemClick(item, onItemClick)}
          render={renderItem}
          item={item}
        />
      ))}
    </ul>
  </div>
);

export default Menu;