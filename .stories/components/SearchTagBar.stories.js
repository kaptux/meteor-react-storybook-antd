import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import '../../client/main.less';
import SearchTagBar from '../../imports/ui/components/SearchTagBar/SearchTagBar';

storiesOf('components.SearchTagBar', module)
  .add('default', () => <SearchTagBar tags={['uno', 'dos']} />)
  .add('onChange', () => (
    <SearchTagBar tags={['uno', 'dos']} onChange={action('onChange')} />
  ));
