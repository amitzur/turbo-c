import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/Button';

export default () => <div className="p-8 bg-gray">
  <Button onClick={action('button click')}>click here</Button>
</div>