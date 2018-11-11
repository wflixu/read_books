import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
    this.updateCount = this.updateCount.bind(this);

    this.state = {
      count: props.initValue || 0
    };
  }
  // getDefaultProps(){
  //     return {
  //         initValue:1,
  //     }

  // }

  componentWillMount() {
    console.log('enter componentWillMount' + this.props.caption);
  }
  componentWillReceiveProps() {
    console.log('enter componentWillReceiveProps' + this.props.caption);
  }

  onClickIncrementButton() {
    this.updateCount(true);
  }

  onClickDecrementButton() {
    this.updateCount(false);
  }

  updateCount(isIncrement) {
    const previousValue = this.state.count;
    const newValue = isIncrement ? previousValue + 1 : previousValue - 1;
    this.setState({ count: newValue });
    this.props.onUpdate(newValue, previousValue);
  }

  render() {
    console.log('enter render ' + this.props.caption);

    const { caption } = this.props;
    const counterStyle = {
      margin: '16px'
    };
    return (
      <div style={counterStyle}>
        <button onClick={this.onClickIncrementButton}>+</button>
        <button onClick={this.onClickIncrementButton}>-</button>
        <span>
          {caption} click count: {this.state.count}
        </span>
      </div>
    );
  }
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  initValue: PropTypes.number,
  onUpdate: PropTypes.func
};

Counter.defaultProps = {
  initValue: 0,
  onUpdate: f => f
};

export default Counter;
