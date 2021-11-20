

import React, { Component, useReducer, useEffect, useMemo, useState } from 'react';
import Header from './Header';
import { useDispatch } from 'react-redux';
import {fetchTodos} from './../actions'
 

import { fetchAPITodos, generateID } from '../api';
import appReducer from './reducer';

import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import TodoFilter from '../components/TodoFilter'
import ConnectedTodoList from '../containers/ConnectedTodoList'
import ConnectedTodoFilter from '../containers/ConnectedTodoFilter'



const initialState = { todos: [], filter: 'all' };
import {store} from '../store'


function Todo() {
    const dispatch = useDispatch();
    const [state, setState] = useState(initialState)

    useEffect(() => {
       dispatch(fetchTodos())
    }, [dispatch])



    

    return (

        <div style={{ width: '400px' }}>
            <Header />
            <AddTodo />
            <hr />
            <TodoList />
            <TodoFilter />
        </div>
    )
}

export default Todo;