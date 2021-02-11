import { Component} from 'react';

const observe = (wrappedComponent,observableFactory, defaultState) => {
    return class extends Component {
        constructor() {
            super(...arguments);
            this.state = defaultState;
            this.props$ = observableFactory(this.props,this.state);
        }
        render(){
            return (<WrappedComponent {...this.props} {...this.state}/>);
        }
        componentWillUnmount(){
            this.subscription.unsubscribe();
        }
        componentDidMount(){
            this.subscription = this.props$.subscription(value => this.setState(value)); 
        }
    }
}