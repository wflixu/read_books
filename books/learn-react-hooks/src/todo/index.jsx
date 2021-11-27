

import React, { Component, useReducer, useEffect, useMemo, useState } from 'react';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { fetchTodos } from './../actions'

import {  observer } from 'mobx-react-lite'


import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import TodoFilter from '../components/TodoFilter'
import { useTodoStore } from '../hooks';






function Todo() {
    const todoStore = useTodoStore()

    useEffect(() => {
        todoStore.fetch();
    }, [todoStore])





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

export default observer(props=><Todo/>) ;