import { Injectable } from '@angular/core';

import {Todo} from './todo.model';
import {UUID} from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
   todos:Todo[] = [];

  constructor() { }
  addTodo(todoDesc:string):Todo[]{
    let todo ={
      id:UUID.UUID(),
      desc:todoDesc,
      completed:false,
    }
    this.todos.push(todo);
    return this.todos;
  }
}
