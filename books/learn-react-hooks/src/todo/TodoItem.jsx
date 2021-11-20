import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle = () => {
        const { toggleTodo, id } = this.props
        toggleTodo(id)
    }
    handleRemove = () => {
        const { removeTodo, id } = this.props
        removeTodo(id)
    }

    render() {
        const { title, completed } = this.props

        return (
            <div style={{ width: 400, height: 25 }}>
                <input type="checkbox" checked={completed} onChange={this.handleToggle}/>
                {title}
                <button style={{ float: 'right' }} onClick={this.handleRemove}>x</button>
            </div>
        )
    }
}
export default TodoList;