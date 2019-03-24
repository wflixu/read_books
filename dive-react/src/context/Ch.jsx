import React, { Component } from 'react';

import MyContext from './MyContext';

class Ch extends Component {
    static contextType = MyContext;
    render(){
        let counts = this.context;
        return (
            <div>
                count:{counts.first}
            </div>
        )
    }
}

export default Ch;