import React from 'react';
import { action } from '@storybook/addon-actions';
import Shortcut from '../src/components/Shortcut';

const _action = action(`key press`);
const keyPressAction = char => () => _action(char);

export default () => <div>
  <div className="bg-gray py-1 px-2 mb-4">
    Press ctrl+[key] and see them logged in the `action logger` bellow
  </div>
  <div className="d-flex">
    <div className="bg-gray py-1 px-2 mr-3">
      <Shortcut text="File" textColor="blue" charColor="red" onAction={keyPressAction('F')} ctrl />
    </div>
    <div className="bg-green-dark py-1 px-2 mr-3">
      <Shortcut text="Open" textColor="cyan" charColor="yellow" onAction={keyPressAction('O')} ctrl/>
    </div>
    <div className="bg-cyan-dark py-1 px-2 mr-3">
      <Shortcut text="Name" textColor="black" charColor="yellow" onAction={keyPressAction('N')} ctrl/>
    </div>
  </div>
</div>