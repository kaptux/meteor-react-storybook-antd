import { Meteor } from 'meteor/meteor';
import { Migrations } from 'meteor/percolate:migrations';
import { Accounts } from 'meteor/accounts-base';

Migrations.add({
  version: 1,
  name: 'Initial migration',
  up() {
    //1. Default admin user
    Accounts.createUser({
      email: 'admin@mail.es',
      username: 'admin',
      password: 'adminPass',
      name: 'Administrator',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/madebybrenton/128.jpg',
      isAdmin: true,
      mustChangePass: false,
      menu: [],
      uiSettings: {
        collapsed: false,
      },
    });
  },
});
