import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            input:''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleInput(e){
        this.setState({
            input:e.target.value,
        })
    }
    handleAdd () {
        const { input } = this.state
        const { addTodo } = this.props
         if (input) {
            addTodo(input)
            this.setState({ input: '' })
        }
    }

    render() {
        const { input } = this.state

        return (
            <div >
                <form onSubmit={e=>{e.preventDefault();this.handleAdd()}}>
                    <input type="text" value={input}  onChange={this.handleInput} placeholder="enter new task" style={{ width: 350, height: 35 }} />
                    <input type="submit" value="add" style={{ float: 'right', marginTop: '2' }} disabled={!input}/>
                    
                </form>
            </div>
        )
    }
}
export default AddTodo;