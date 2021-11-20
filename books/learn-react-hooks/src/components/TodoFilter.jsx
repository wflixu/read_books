import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'

const TodoFilterItem = inject('todoStore')(observer(
    function ({ name, todoStore }) {


        const handleFilter = () => {
            todoStore.filterTodos(name);
        }

        const style = {
            color: 'blue',
            cursor: 'pointer',
            fontWeight: (todoStore.filter === name) ? 'bold' : 'normal'
        }

        return <span onClick={handleFilter} style={style}>{name}</span>

    }
))




function TodoFilter(props) {

    return (
        <div>
            <TodoFilterItem name="all"  {...props} />{' / '}
            <TodoFilterItem name="active" {...props} />{' / '}
            <TodoFilterItem name="completed" {...props} />
        </div>
    )

}
export default TodoFilter;