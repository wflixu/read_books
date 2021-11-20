import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filterTodos } from '../actions'

function TodoFilterItem({ name }) {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);
    const handleFilter = () => {
        dispatch(filterTodos(name));
    }

    const style = {
        color: 'blue',
        cursor: 'pointer',
        fontWeight: (filter === name) ? 'bold' : 'normal'
    }

    return <span onClick={handleFilter} style={style}>{name}</span>

}


function TodoFilter() {
    // const dispatch = useDispatch();
    // const filter = useSelector(state => state.filter);
    // const handleFilter = () => {
    //     dispatch(filterTodos(name));
    // }

    return (
        <div>
            <TodoFilterItem name="all"  />{' / '}
            <TodoFilterItem name="active"  />{' / '}
            <TodoFilterItem name="completed"  />
        </div>
    )

}
export default TodoFilter;