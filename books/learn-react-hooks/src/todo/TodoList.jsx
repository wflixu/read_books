import React, { Component } from 'react';
import StateContext from './StateContext';
import TodoItem from './TodoItem'


class TodoList extends Component {
    constructor(props){
        super(props);
    }
    static contextType = StateContext
   
    render() {
        const items = this.context;
        return items.map(item =>
            <TodoItem {...item} key={item.id} {...this.props}/>
        )
    }
}
export default TodoList;