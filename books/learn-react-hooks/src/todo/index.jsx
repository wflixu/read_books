

import React, { Component, useReducer, useEffect, useMemo, useState } from 'react';
import Header from './Header';

import { fetchAPITodos, generateID } from '../api';
import appReducer from './reducer';

import ConnectedAddTodo from '../containers/ConnectedAddTodo'
import ConnectedTodoList from '../containers/ConnectedTodoList'
import ConnectedTodoFilter from '../containers/ConnectedTodoFilter'

const initialState = { todos: [], filter: 'all' };
import {store} from '../store'


function Todo() {
    const [state, setState] = useState(initialState)

    useEffect(() => {
        const unsubscribe = store.subscribe(() => setState(store.getState()))
        return unsubscribe
    }, [])



    

    return (

        <div style={{ width: '400px' }}>
            <Header />
            <ConnectedAddTodo />
            <hr />
            <ConnectedTodoList />
            <ConnectedTodoFilter />
        </div>
    )
}

export default Todo;