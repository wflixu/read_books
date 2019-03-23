import React, { Component } from 'react';
import Counter from './Counter';
import Summary from './Summary';

const style = {
  margin: '20px'
};

class ControlPanel extends Component {
  render() {
    return (
      <div style={style}>
        <Counter caption="first" />
        <Counter caption="second" />
        <Counter caption="third" />
        <hr/>
        <Summary />
      </div>
    );
  }
}

export default ControlPanel;