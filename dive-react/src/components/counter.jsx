import React from 'react';
import {connect} from 'react-redux';

import * as Actions from '../counters/actions';


function Counter({caption, onIncrement, onDecrement, value}) {
    return (
      <div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <span>{caption} count: {value}</span>
      </div>
    );
  }
  function mapStateToProps(state, ownProps) {
    return {
      value: state[ownProps.caption]
    }
  }
  function mapDispatchToProps(dispatch, ownProps) {
    return {
      onIncrement: () => {
        dispatch(Actions.increment(ownProps.caption));
      },
      onDecrement: () => {
        dispatch(Actions.decrement(ownProps.caption));
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Counter);