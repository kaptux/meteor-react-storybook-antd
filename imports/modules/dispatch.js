import { Meteor } from 'meteor/meteor';
import message from 'antd/lib/message';

import '../api/Users/methods';

export default function dispatch() {
  try {
    Meteor.call(...arguments);
  } catch (e) {
    message.error(e);
  }
}
