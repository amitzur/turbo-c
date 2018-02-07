import React from 'react';
import { action } from '@storybook/addon-actions';
import Window from '../src/components/Window';

export default () => <Window top={200} left={100} width={500} height={300} name="Some window" onClose={action('close window')}/>