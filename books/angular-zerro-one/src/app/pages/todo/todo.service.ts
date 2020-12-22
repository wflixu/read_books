import { Injectable, Inject } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpUrlEncodingCodec,
} from '@angular/common/http';

import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { catchError, map, mergeMap, filter, tap } from 'rxjs/operators';

import { Todo, AppState, Auth } from './../../core/entities';
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  TOGGLE_ALL,
  CLEAR_COMPLETED,
  FETCH_FROM_API,
} from './todo.action';

export interface leanRes {
  result: Object;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private baseUrl:string;
  private headers: HttpHeaders;
  private user;
  private auth$: Observable<Auth>;

  constructor(
    private http: HttpClient,
    @Inject('auth') private authService,
    @Inject('user') private userService,
    @Inject('urls') private urls,
    private store$: Store<AppState>
  ) {
    this.baseUrl = this.urls.classes;
    this.user = this.authService.getUser();
    this.headers = this.userService.getHttpHeaders();
    this.auth$ = this.store$.select('auth').pipe(
      filter((auth) => auth.user !== null)
    );
  }
  addTodo(todoDesc: string) {
    let todo = {
      desc: todoDesc,
      completed: false,
      userId: this.user.userId,
    };
    return this.http
      .post(this.baseUrl + 'Todo', JSON.stringify(todo),
      {
        headers:  this.headers,
      }
      )
      .pipe(
        map((res: any) => {
          console.log(res);
          return {
            ...todo,
            id: res.objectId,
          } as Todo;
        }),
        catchError(this.handleError)
      )
      .subscribe((todo: Todo) => {
        this.store$.dispatch(ADD_TODO({ todo }));
      });
  }

  public deleteTodo(todo: Todo) {
    const url = `${this.baseUrl}${'Todo'}/${todo.objectId}`;
    this.http.delete(url, { headers: this.headers }).subscribe((_) => {
      this.store$.dispatch(REMOVE_TODO({ todo }));
    });
  }

  public toggleTodo(todo: Todo) {
    const url = `${this.baseUrl}${'Todo'}/${todo.objectId}`;
    let updateTodo = {
      ...todo,
      createdAt: null,
      completed: !todo.completed,
      updatedAt: null,
    };
    delete updateTodo['createdAt'];
    delete updateTodo['updatedAt'];

    return this.http
      .put(url, JSON.stringify(updateTodo), {
        headers: this.headers,
      })
      .subscribe((_) => {
        this.store$.dispatch(TOGGLE_TODO({ todo: updateTodo }));
      });
  }

  public toggleAll() {
    this.getTodos()
      .pipe(
        mergeMap((todos) => {
          return from(todos);
        })
      )
      .subscribe((todo) => {
        console.log(todo);
        // this.toggleTodo(todo);
      });
  }

  public clearCompleted() {
    this.getTodos();
  }

  getTodos(): Observable<Todo[]> {
    return this.auth$.pipe(
      mergeMap((auth: Auth) => {
        let filterOjb: any = {
          userId: auth.user.userId,
        };
        let data = encodeURIComponent(`where=${JSON.stringify(filterOjb)}`);
        return this.http
          .get(this.baseUrl + 'Todo', {
            headers: this.headers,
            params: {
              where: JSON.stringify(filterOjb),
            },
          })
          .pipe(
            map((res: any) => {
              console.log(res.results);
              return res.results as Todo[];
            })
          );
      })
    );
  }

  // filterTodos(filter: string) {
  //   let filterOjb: any = {
  //     userId: this.user.userId
  //   };
  //   switch (filter) {
  //     case 'ACTIVE':
  //       filterOjb.completed = false;
  //       break;
  //     case 'COMPLETED':
  //       filterOjb.completed = true;
  //       break;
  //     default:
  //       break;
  //   }
  //   let data = encodeURIComponent(`where=${JSON.stringify(filterOjb)}`);
  //   this.http.get(this.baseUrl + 'Todo',
  //     {
  //       headers: this.headers,
  //       params: {
  //         'where': JSON.stringify(filterOjb)
  //       }
  //     })
  //     .pipe(
  //       map((res: any) => {
  //         console.log(res.results);
  //         return res.results as Todo[];
  //       })
  //     ).subscribe(todos => this.updateStoreAndSubject(todos));
  // }

  private handleError(err: any): Promise<any> {
    console.error('an error', err);
    return Promise.reject(err.message || err);
  }

  // private updateStoreAndSubject(todos) {
  //   this.dataStore.todos = [...todos];
  //   this._todos.next(Object.assign({}, this.dataStore).todos);
  // }
}
