
import React from 'react';

class Page2 extends React.Component {
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
      <div style={{ width: 400, margin: '100px auto' }}>
        <h4>This is the Page2</h4>
      </div>
    );
  }
}

export default Page2;
