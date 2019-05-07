import { Meteor } from 'meteor/meteor';
import React from 'react';

import Login from './Login';

function meteorLogin({ userName, password }, callback) {
  Meteor.loginWithPassword(userName, password, err => {
    if (err) {
      callback(err.reason);
    } else {
      // No necesary redirect because Meteor.userId() in app/index.js is reactive.
    }
  });
}

export default function() {
  return <Login onSubmit={meteorLogin} />;
}
