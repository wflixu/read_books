import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor() {
    super(...arguments);

    console.log('enter TodoItem constructor: ' + this.props.text);
  }

  shouldComponentUpdate (nextProps,nextState){
    return (nextProps.completed!==this.props.completed) || (nextProps.text !==this.props.text)
  }

  render() {
    const { onToggle, onRemove, completed, text } = this.props;

    return (
      <li
        className="todo-item"
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        <input
          className="toggle"
          type="checkbox"
          checked={completed ? 'checked' : ''}
          readOnly
          onClick={onToggle}
        />
        <label className="text">{text}</label>
        <button className="remove" onClick={onRemove}>
          ×
        </button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default TodoItem;
