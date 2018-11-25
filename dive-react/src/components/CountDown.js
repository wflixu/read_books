import { Component } from 'react';
import propTypes from 'prop-types';

class CountDown extends Component {
    constructor(){
        super(...arguments);
        this.state = {count:this.props.startCount};
    }
     
    componentDidMount(){
        this.intervalHandle = setInterval(()=>{
            const newCount = this.state.count-1;
            if(newCount>=0){
                this.setState({count:newCount});
            }else{
                window.clearInterval(this.intervalHandle)
            }
        },1000)
    }
    componentWillUnmount(){
        if(this.intervalHandle){
            window.clearInterval(this.intervalHandle);
        }
    }

    shouldComponentUpdate(nextProps,nextState){
        return nextState.count !== this.state.count;
    }
    render(){
        return this.props.children(this.state.count)
    }
}

CountDown.propTypes ={
    children:propTypes.func.isRequired,
    startCount:propTypes.number.isRequired
}

export default CountDown;