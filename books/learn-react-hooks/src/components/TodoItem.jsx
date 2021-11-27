import React, { Component } from 'react';
import {  observer } from 'mobx-react-lite'
import { useTodoStore } from '../hooks';

function TodoItem({item }) {
    const {title,id,completed} = item;
    console.log(item);
    const todoStore = useTodoStore();
    const handleToggle = () => {
        todoStore.toggleTodo(id)
    }
    const handleRemove = () => {
        todoStore.removeTodo(id);
    }
    return (
        <div style={{ width: 400, height: 25 }}>
            <input type="checkbox" checked={completed} onChange={handleToggle} />
            {title}
            <button style={{ float: 'right' }} onClick={handleRemove}>x</button>
        </div>
    )

}

export default 
    observer(
      props => <TodoItem {...props}/>  
    )