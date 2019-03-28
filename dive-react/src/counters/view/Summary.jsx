import React from 'react';
import {connect} from 'react-redux';

function Summary({value}) {
  return (
    <div>Total Count: {value}</div>
  );
}



function mapStateToProps(state) {
  let sum = 0;
  const {counters} = state;
  for (const key in counters) {
    if (counters.hasOwnProperty(key)) {
      sum += counters[key];
    }
  }
  return {value: sum};
}


export default connect(mapStateToProps)(Summary);