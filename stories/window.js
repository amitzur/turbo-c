import React from 'react';
import { action } from '@storybook/addon-actions';
import WindowWidget from '../src/components/Window';
import Window from '../src/stores/window';

const store = new Window({
  top: 200,
  left: 100,
  width: 500,
  height: 300,
  name: "some widow",
  onClose: action('close window'),
  onDrag: action('drag window'),
  onMouseDown: action('mouse down on window')
});

export default () => <WindowWidget store={store} />