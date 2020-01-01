import { Component, OnInit } from '@angular/core';


import {Router,ActivatedRoute,Params} from '@angular/router'
import { TodoService } from './todo.service';
import { Todo } from './../../core/entities';

@Component({

  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  desc: string = '';
  filter:string = 'ALL';

  constructor(
    private service: TodoService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.route.params.forEach((params:Params)=>{
     this.filter = params['filter'];
     this.filterTodos(this.filter);
    })



  }
  filterTodos(filter:string):void{
    this.service.filterTodos(filter)
    .then(todos=>{
      this.todos = todos as Todo[];
    });
  }
  onTextChanges(value){
    this.desc = value;
    console.log(this.desc)
  }

  addTodo() {
    this.service.addTodo(this.desc).then(todo=>{
        this.filterTodos(this.filter);
      }).catch();

    this.desc = '';
  }
  toggleAll(){
    Promise.all(this.todos.map(todo=>{
      return this.toggleTodo(todo);
    }));
  }
  clearCompleted(){

    const completed_todos = this.todos.filter(todo=>todo.completed === true);
    const active_todos = this.todos.filter(todo=>todo.completed === false);

    Promise.all(completed_todos.map(todo=>this.removeTodo(todo))).then(()=>
    {
      this.todos = [...active_todos]
    }
    );
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
