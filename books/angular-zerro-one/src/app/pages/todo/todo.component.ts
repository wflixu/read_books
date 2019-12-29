import { Component, OnInit } from '@angular/core';


import { TodoService } from './todo.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  desc: string = '';

  constructor(private service: TodoService) { }

  ngOnInit() {
    this.service.getTodos()
    .then(todos=>{
      this.todos = todos as Todo[];
    });
  }
  addTodo() {
    this.service.addTodo(this.desc).then(todo=>{
        this.todos.push(todo as Todo);
      }
      ).catch();

    this.desc = '';
  }

  toggleTodo(todo:Todo){
    const i = this.todos.indexOf(todo);
    this.service.toggleTodo(todo)
    .then(t=>{
      this.todos[i].completed = !this.todos[i].completed;
    })
  }

  removeTodo(todo:Todo){
    const i  = this.todos.indexOf(todo);
    this.service.deleteTodo(todo)
    .then(()=>{
      this.todos = [
        ...this.todos.slice(0,i),
        ...this.todos.slice(i+1)
      ]
    })
  }


}
