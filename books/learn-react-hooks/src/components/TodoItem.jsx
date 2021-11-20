import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import { toggleTodo, removeTodo } from './../actions';

export default inject('todoStore')(
    observer(
        function TodoItem({item,todoStore }) {
            const {title,id,completed} = item;
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
    )

)