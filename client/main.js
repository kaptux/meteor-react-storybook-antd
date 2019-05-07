/* eslint-disable no-unused-expressions */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import settings from '../defaultSettings';
import App from '../imports/ui/layouts/App';

Meteor.startup(() =>
  render(
    <BrowserRouter>
      <Switch>
        <App {...settings} />
      </Switch>
    </BrowserRouter>,
    document.getElementById('root'),
  ),
);
