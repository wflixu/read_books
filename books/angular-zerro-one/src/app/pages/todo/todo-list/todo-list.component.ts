import { Component, OnInit, Input,Output,EventEmitter, SimpleChanges } from '@angular/core';

import { Todo } from './../../../core/entities';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {
  private _todos: Todo[] = [];
  @Input()
  set todos(todos:Todo[]){
    if(todos !== null)
      this._todos = [...todos];
  }
  get todos() {
    return this._todos;
  }
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['todos']);

  }


  @Output() onRemoveTodo = new EventEmitter<Todo>();
  @Output() onToggleTodo = new EventEmitter<Todo>();
  @Output() onToggleAll = new EventEmitter<boolean>();

  onRemoveTriggered(todo: Todo) {
    this.onRemoveTodo.emit(todo);
  }
  onToggleTriggered(todo: Todo) {
    this.onToggleTodo.emit(todo);
  }
  onToggleAllTriggered() {
    this.onToggleAll.emit(true);
  }

}
