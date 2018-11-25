import React from 'react';

function removeUserProp(WrappedComponent) {
  return function newRender(props) {
    const {age, ...otherProps} = props;
    return <WrappedComponent {...otherProps} />
  }
}

export default removeUserProp;