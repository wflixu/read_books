import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpUrlEncodingCodec } from '@angular/common/http';



import { Todo } from './../../core/entities';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface leanRes {
  result: Object;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = 'https://awgkvy8x.lc-cn-n1-shared.com/1.1/classes/';
  private headers: HttpHeaders;
  private user;
  private _todos: BehaviorSubject<Todo[]>;

  private dataStore: {
    todos: Todo[]
  };

  constructor(private http: HttpClient, @Inject('auth') private authService) {
    this.user = authService.getUser();
    this.headers = new HttpHeaders(
      {
        'Content-type': 'application/json',
        'X-LC-Id': 'awgkVY8XvUY5oWtvmzRH6ylj-gzGzoHsz',
        'X-LC-Key': 'GJnJ1a8KVnaVLquMKj6uSllD',
        'X-LC-Session': this.user.sessionToken
      }
    );
    this.dataStore = { todos: [] };
    this._todos = new BehaviorSubject<Todo[]>([]);

  }

  addTodo(todoDesc: string) {

    let todo = {
      desc: todoDesc,
      completed: false,
      userId: this.user.userId
    };
    return this.http.post(
      this.baseUrl + 'Todo', JSON.stringify(todo), {
      headers: this.headers
    }).pipe(
      map((res: any) => {
        console.log(res);
        return {
          ...todo,
          id: res.objectId
        } as Todo;
      }),
      catchError(this.handleError)
    ).subscribe((todo: Todo) => {
      this.dataStore.todos = [...this.dataStore.todos, todo];
      this._todos.next(Object.assign({}, this.dataStore).todos);
    })
  }

  get todos() {
    return this._todos.asObservable();
  }

  getTodos() {
    let filterOjb: any = {
      userId: this.user.userId
    };
    let data = encodeURIComponent(`where=${JSON.stringify(filterOjb)}`);
    return this.http.get(this.baseUrl + 'Todo',
      {
        headers: this.headers,
        params: {
          'where': JSON.stringify(filterOjb)
        }
      }).pipe(
        map((res: any) => {
          console.log(res.results);
          return res.results as Todo[];
        })
      ).subscribe(todos => this.updateStoreAndSubject(todos));
  }

  filterTodos(filter: string) {
    let filterOjb: any = {
      userId: this.user.userId
    };
    switch (filter) {
      case 'ACTIVE':
        filterOjb.completed = false;
        break;
      case 'COMPLETED':
        filterOjb.completed = true;
        break;
      default:
        break;
    }
    let data = encodeURIComponent(`where=${JSON.stringify(filterOjb)}`);
    this.http.get(this.baseUrl + 'Todo',
      {
        headers: this.headers,
        params: {
          'where': JSON.stringify(filterOjb)
        }
      })
      .pipe(
        map((res: any) => {
          console.log(res.results);
          return res.results as Todo[];
        })
      ).subscribe(todos => this.updateStoreAndSubject(todos));
  }

  toggleTodo(todo: Todo) {
    const url = `${this.baseUrl}${'Todo'}/${todo.objectId}`;
    const i = this.dataStore.todos.indexOf(todo);
    let updateTodo = {
      ...todo,
      createdAt: null,
      completed: !todo.completed,
      updatedAt: null
    };
    delete updateTodo['createdAt'];
    delete updateTodo['updatedAt'];

    this.http.put(url, JSON.stringify(updateTodo), {
      headers: this.headers
    }).subscribe(_ => {
      this.dataStore.todos = [
        ...this.dataStore.todos.slice(0, i),
        updateTodo,
        ...this.dataStore.todos.slice(i + 1)
      ];
      this._todos.next(Object.assign({}, this.dataStore).todos);
    })
  }


  public deleteTodo(todo: Todo) {
    const url = `${this.baseUrl}${'Todo'}/${todo.objectId}`;
    const i = this.dataStore.todos.indexOf(todo);
    this.http.delete(url, { headers: this.headers })
      .subscribe(_ => {
        this.dataStore.todos = [
          ...this.dataStore.todos.slice(0, i),
          ...this.dataStore.todos.slice(i + 1)
        ];
        this._todos.next(Object.assign({}, this.dataStore).todos);
      });
  }

  toggleAll(){
    this.dataStore.todos.forEach(todo => this.toggleTodo(todo));
  }
  clearCompleted(){
    this.dataStore.todos
      .filter(todo => todo.completed)
      .forEach(todo => this.deleteTodo(todo));
  }


  private handleError(err: any): Promise<any> {
    console.error('an error', err);
    return Promise.reject(err.message || err)
  }

  private updateStoreAndSubject(todos) {
    this.dataStore.todos = [...todos];
    this._todos.next(Object.assign({}, this.dataStore).todos);
  }


}
