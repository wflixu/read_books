import { Component, OnInit } from '@angular/core';


import {Router,ActivatedRoute,Params} from '@angular/router'
import { TodoService } from './todo.service';
import { Todo } from './../../core/entities';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({

  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todos : Observable<Todo[]>;
  desc: string = '';
  filter:string = 'ALL';

  constructor(
    private service: TodoService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    // this.route.params.forEach((params:Params)=>{
    //  this.filter = params['filter'];
    //  this.filterTodos(this.filter);
    // })

    this.route.params.pipe(
      pluck('filter')
    )
    .subscribe(filter => {
       console.log(filter,'11111111111111111111111111');
      this.service.filterTodos(filter);
      this.todos = this.service.todos;
    })


  }

  addTodo() {
    this.service.addTodo(this.desc)

    this.desc = '';
  }


  toggleTodo(todo:Todo){
    this.service.toggleTodo(todo)
  }

  removeTodo(todo:Todo){
    this.service.deleteTodo(todo);
  }
  toggleAll(){
   this.service.toggleAll();
  }
  clearCompleted(){
    this.service.clearCompleted();
  }

  filterTodos(filter:string):void{
    this.service.filterTodos(filter);
  }


  onTextChanges(value){
    this.desc = value;
    console.log(this.desc)
  }


}
