import React from 'react';
import { action } from '@storybook/addon-actions';
import Shortcut from '../src/components/Shortcut';

const keyPressAction = action('key press');

export default () => <div>
  <div className="bg-gray py-1 px-2">
    <Shortcut text="File" textColor="blue" charColor="red" onAction={keyPressAction} ctrl />
  </div>
</div>