import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { pluck, mergeMap, startWith, tap } from 'rxjs/operators';


import { TodoService } from './todo.service';
import { ADD_TODO, FETCH_FROM_API } from './todo.action';
import { AppState, Todo } from './../../core/entities';

@Component({

  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  private user;
  todos: Observable<Todo[]>;
  desc: string = '';
  filter: string = 'ALL';

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router,
    @Inject('auth') private authService,
    private store$: Store<AppState>
  ) {
    const fetchData$ = this.todoService.getTodos().pipe(
      mergeMap(
        todos => {
          this.store$.dispatch(FETCH_FROM_API({ todos }));
          return this.store$.select('todos');
        }
      ),
      startWith([])
    );
    const filterData$ = this.route.params.pipe(
      pluck('filter'),
      tap(value => {
        const filter = value as string;
        this.store$.dispatch({ type: filter });
      }),
      mergeMap(
        _ => this.store$.select('todoFilter')
      )
    );
    this.todos = combineLatest(
      fetchData$,
      filterData$,
      (todos: Todo[], filter: any) => todos.filter(filter)
    )

    this.user = authService.getUser();

  }

  ngOnInit() {
    //  this.route.params.pipe(
    //    pluck('filter')
    //  ).subscribe(value=>{
    //    const filterType =  value as string;
    //    this.store$.dispatch({type:filterType});
    //  })
  }

  addTodo() {
    this.todoService.addTodo(this.desc);
    this.desc = '';
  }

  removeTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }


  toggleTodo(todo: Todo) {
    this.todoService.toggleTodo(todo);
  }

  toggleAll() {
    this.todoService.toggleAll();
  }
  clearCompleted() {
    this.todoService.clearCompleted();
  }

  onTextChanges(value) {
    this.desc = value;
  }


}
