
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Layout } from 'antd';

const { Footer } = Layout;

export default (props) => {
  const { productName, copyrightStartYear, author } = Meteor.settings.public;
  return (
    <Footer style={{ textAlign: 'center' }}>
      {`${productName} ©${copyrightStartYear} by ${author}`}
    </Footer>
  );
};
