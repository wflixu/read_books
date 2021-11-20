import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from './../actions';

export default function TodoItem({ title, completed, id }) {
    const dispatch = useDispatch();
    const handleToggle = () => {
        dispatch(toggleTodo(id))
    }
    const handleRemove = () => {
        dispatch(removeTodo(id))
    }
    return (
        <div style={{ width: 400, height: 25 }}>
            <input type="checkbox" checked={completed} onChange={handleToggle} />
            {title}
            <button style={{ float: 'right' }} onClick={handleRemove}>x</button>
        </div>
    )

};