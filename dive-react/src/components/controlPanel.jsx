import React from 'react';
import store from '../Store';
import * as Actions from '../counters/actions';

import Counter from './counter';

export default class ControlPanel extends React.Component{
    constructor(props) {
        super(props);
        this.state=this.getOwnState();
        this.onChange = this.onChange.bind(this);
    }
 
    getOwnState() {
        const {first,second,third} = store.getState();
        return {
            sum: first+second+third
        }
    }
    onChange() {
        this.setState(this.getOwnState());
    }
    componentDidMount() {
        store.subscribe(this.onChange);
    }
    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }


    render(){
        return(
            <div>
                <Counter caption="first" />
                <Counter caption="second" />
                <Counter caption="third" />
                <h3>sum: {this.state.sum}</h3>
            </div>
        )
    }
}