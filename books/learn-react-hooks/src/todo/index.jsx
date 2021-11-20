

import React, { Component, useReducer, useEffect, useMemo, useState } from 'react';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { fetchTodos } from './../actions'

import { inject } from 'mobx-react'


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

export default Todo;