import React, { Component, useContext, useMemo } from 'react';

import { observer } from 'mobx-react'

import TodoItem from './TodoItem'
import { useTodoStore } from '../hooks';

function TodoList() {
    const todoStore = useTodoStore();


    return (
        todoStore.filteredTodos.map(item =>
            <TodoItem item={item} key={item.id} />

        ))
};

export default observer(props => <TodoList />)