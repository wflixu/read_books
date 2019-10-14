import React, { Component } from 'react';
import Counter from '../counters/view/Counter';
import Summary from '../counters/view/Summary';

const style = {
  margin: '20px'
};

class ControlPanel extends Component {
   constructor(props,context){
      super(props,context);

      console.log(this.context);
   }

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