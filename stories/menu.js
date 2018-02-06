import React from 'react';
import { action } from '@storybook/addon-actions';
import Menu from '../src/components/Menu';

const items = [
  { key: 'item-1' },
  { key: 'item-2', separator: true },
  { key: 'item-3', },
  { key: 'item-4', selected: true },
];

export default () => <div style={{ width: 300 }}>
  <Menu items={items} onItemClick={action('menu item click')} className="bg-gray" renderItem={({ key }) => <div>{key}</div>} />
</div>;