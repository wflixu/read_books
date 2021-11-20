import React, { Component } from 'react';

function TodoFilterItem({ name, filter='all', filterTodos }) {

    const handleFilter = () => {

        filterTodos(name)
    }

    const style = {
        color: 'blue',
        cursor: 'pointer',
        fontWeight: (filter === name) ? 'bold' : 'normal'
    }

    return <span onClick={handleFilter} style={style}>{name}</span>

}


function TodoFilter (props) {
   
        return (
            <div>
                <TodoFilterItem name="all" {...props} />{' / '}
                <TodoFilterItem name="active" {...props} />{' / '}
                <TodoFilterItem name="completed"  {...props} />
            </div>
        )
    
}
export default TodoFilter;