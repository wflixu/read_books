import React, { Component } from 'react';

class TodoFilterItem extends Component {
    constructor(props) {
        super(props);
        this.handleFilter = this.handleFilter.bind(this);
    }
    handleFilter() {
        const { name, filterTodos } = this.props
        filterTodos(name)
    }

    render() {
        const { name, filter = 'all' } = this.props
        const style = {
            color: 'blue',
            cursor: 'pointer',
            fontWeight: (filter === name) ? 'bold' : 'normal'
        }

        return <span onClick={this.handleFilter} style={style}>{name}</span>

    }
}


class TodoFilter extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div>
                <TodoFilterItem name="all" {...this.props} />{' / '}
                <TodoFilterItem name="active" {...this.props} />{' / '}
                <TodoFilterItem name="completed"  {...this.props} />
            </div>
        )
    }
}
export default TodoFilter;