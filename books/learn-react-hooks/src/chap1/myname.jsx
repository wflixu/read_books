import React from 'react'

export class MyName extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.setState({
            name: evt.target.value
        })
    }

    render() {
        const { name } = this.state
        return (<div>
            my name is : {name}
            <input type="text" value={name} onChange={this.handleChange} />
        </div>)
    }
}