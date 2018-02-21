import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/Button';
import Popup from '../src/components/Popup';
import Menu from '../src/components/Menu';

const items = [
  { key: 'item-1' },
  { key: 'item-2', separator: true },
  { key: 'item-3', },
  { key: 'item-4', selected: true },
];

export default () => <div>
  <Popup text="Random content" className="bg-green text-blue mb-4 py-2" render={({ close }) => (
    <div className="bg-cyan p-4 text-black">Random content here <Button onClick={close}>Close</Button></div>
  )} />
  <Popup text="Edit" className="bg-gray" render={({ close }) => (
    <Menu onItemClick={action('popup menu item click')} className="bg-gray" items={items} renderItem={({ key }) => <div>{key}</div>} />
  )}/>
</div>