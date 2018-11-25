import React, { Component } from 'react';


class UserInfo extends Component {
    render() {
     const {name,age,agender} = this.props
      return (
        <div className="user-info">
            <p>uname:{name}</p>
            <p>age:{age}</p>
            <p>agender:{agender}</p>
            hell0
        </div>
      );
    }
  }
  
  export default UserInfo;
