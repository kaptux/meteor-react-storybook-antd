
import React from 'react';
import { LocaleProvider, DatePicker, message } from 'antd';
import esES from 'antd/lib/locale-provider/es_ES';


class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  handleChange(date) {
    message.info(`Selected Date: ${date ? date.toString() : ''}`);
    this.setState({ date });
  }
  render() {
    return (
      <LocaleProvider locale={esES}>
        <div style={{ width: 400, margin: '100px auto' }}>
          <DatePicker onChange={value => this.handleChange(value)} />
          <div style={{ marginTop: 20 }}>Fecha: {this.state.date && this.state.date.toString()}</div>
        </div>
      </LocaleProvider>
    );
  }
}

export default Page1;
