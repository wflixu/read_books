import React, { Component, useContext, useMemo } from 'react';

import {inject,observer} from 'mobx-react'
import TodoItem from './TodoItem'
function TodoList({todoStore}) {
   

    return todoStore.filteredTodos.map(item =>
        <TodoItem item={item} key={item.id} />
    )
};

export default inject('todoStore')(observer(TodoList))