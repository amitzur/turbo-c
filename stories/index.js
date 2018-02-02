import React from 'react';
import '../src/sass/index.scss';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

storiesOf('Window', module)
  .add('Basic', () => {
    return <div>Hello</div>
  });