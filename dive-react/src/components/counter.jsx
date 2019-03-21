import React from 'react';
import store from '../Store';
import * as Actions from '../counters/actions';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getOwnState();
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    getOwnState() {
        return {
            value: store.getState()[this.props.caption]
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
    onIncrement() {
        store.dispatch(Actions.increment(this.props.caption));
    }
    onDecrement() {
        store.dispatch(Actions.decrement(this.props.caption));
    }
    render() {
        const {caption} =this.props;
        return (
            <div>
                <span>{caption} count:{this.state.value}</span>
                    <button onClick={this.onIncrement}>+</button>
                    <button onClick={this.onDecrement}>-</button>
            </div>
        )
    }
}

export default Counter;