import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
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
                <input type="checkbox" checked={completed} onChange={this.handleToggle} />
                {title}
                <button style={{ float: 'right' }} onClick={this.handleRemove}>x</button>
            </div>
        )
    }
}
export default function TodoItem({ title, completed, id, toggleTodo, removeTodo }) {
    const handleToggle = () => {
        toggleTodo(id)
    }
    const handleRemove = () => {
        removeTodo(id)
    }
    return (
        <div style={{ width: 400, height: 25 }}>
            <input type="checkbox" checked={completed} onChange={handleToggle} />
            {title}
            <button style={{ float: 'right' }} onClick={handleRemove}>x</button>
        </div>
    )

};