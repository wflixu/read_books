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
    private service: TodoService,
    private route: ActivatedRoute,
    private router: Router,
    @Inject('auth') private authService,
    private store$: Store<AppState>
  ) {
    const fetchData$ = this.service.getTodos().pipe(
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
  }

  addTodo() {
    this.service.addTodo(this.desc);
    this.desc = '';
  }

  removeTodo(todo: Todo) {
    this.service.deleteTodo(todo);
  }


  toggleTodo(todo: Todo) {
    this.service.toggleTodo(todo);
  }

  toggleAll() {
    this.service.toggleAll();
  }
  clearCompleted() {
    // this.service.clearCompleted();
  }

  filterTodos(filter: string): void {
    // this.service.filterTodos(filter);
  }


  onTextChanges(value) {
    this.desc = value;
  }


}
