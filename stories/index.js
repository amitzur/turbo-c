import React from 'react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../src/sass/index.scss';
import { addStories } from './utils';

import styleguide from './styleguide';


addStories('Styleguide', styleguide);
addStories('Window', [{ name: 'Basic', render: () => <div>hello</div>}]);