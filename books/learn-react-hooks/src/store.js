import { observable, action, computed, makeObservable,makeAutoObservable } from 'mobx';
import { fetchAPITodos, generateID } from './api';

export default class TodoStore {
  todos = [];
  filter = 'all';

  constructor() {
    makeAutoObservable(this);
  }

  get filteredTodos() {
    switch (this.filter) {
      case 'active':
        return this.todos.filter((t) => t.completed === false);
      case 'completed':
        return this.todos.filter((t) => t.completed === true);
      default:
        return this.todos;
    }
  }

  fetch() {
    fetchAPITodos().then((fetchedTodos) => {
      console.log('fetchedTodos',fetchedTodos)
      this.todos = fetchedTodos;
      
    });
  }

  addTodo(title) {
    console.log('addTodo',title)
    // makeAutoObservable(this);
    this.todos.push({ id: generateID(), title, completed: false });
    console.log(this.todos)
  }

  toggleTodo(id) {
    for (let todo of this.todos) {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        break;
      }
    }
  }

  removeTodo(id) {
    let index = 0;
    for (let todo of this.todos) {
      if (todo.id === id) {
        break;
      } else {
        index++;
      }
    }
    this.todos.splice(index, 1);
  }

  filterTodos(filterName) {
    this.filter = filterName;
  }
}
