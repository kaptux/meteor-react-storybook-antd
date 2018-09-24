import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, Icon } from 'antd'

import '../node_modules/antd/dist/antd.less';


storiesOf('Button', module)
  .add('default', () => <Button onClick={action('button-clicked!')}>Un botón</Button>)
  .add('with icon', () => (
    <Button onClick={action('button-with-icon-clicked!')} icon="search" type="primary">Un botón</Button>
  ));
