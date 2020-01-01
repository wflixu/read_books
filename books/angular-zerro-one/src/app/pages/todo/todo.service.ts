import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpUrlEncodingCodec } from '@angular/common/http';



import { Todo } from './../../core/entities';

export interface leanRes {
  result:Object;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = 'https://awgkvy8x.lc-cn-n1-shared.com/1.1/classes/';
  private headers:HttpHeaders;
  private user;

  todos: Todo[] = [];

  constructor(private http: HttpClient, @Inject('auth') private authService) {
     this.user = authService.getUser();
     this.headers =new HttpHeaders(
      {
        'Content-type':'application/json',
        'X-LC-Id': 'awgkVY8XvUY5oWtvmzRH6ylj-gzGzoHsz',
         'X-LC-Key': 'GJnJ1a8KVnaVLquMKj6uSllD',
         'X-LC-Session':this.user.sessionToken
      }
    )

  }
  addTodo(todoDesc: string): Promise<Todo|void>{

     let todo = {
       desc:todoDesc,
       completed:false,
       userId:this.user.userId
     };
     return this.http.post(
       this.baseUrl+'Todo',JSON.stringify(todo),{
         headers:this.headers
       }
     ).toPromise()
     .then((res:any)=>{
       console.log(res);
       return {
         ...todo,
         id:res.objectId
       }as Todo;
     } )
     .catch(this.handleError);
  }

  filterTodos(filter:string):Promise<Todo[]>{
    let filterOjb:any = {
      userId:this.user.userId
    };
    switch (filter){
       case 'ACTIVE':
        filterOjb.completed =false;
         break;
       case 'COMPLETED':
         filterOjb.completed = true;
         break;
         default:
          break;
    }
    let data = encodeURIComponent(`where=${JSON.stringify(filterOjb)}`);
    return this.http.get(this.baseUrl+'Todo',
    {
      headers:this.headers,
      params:{
        'where': JSON.stringify(filterOjb)
      }
    })
    .toPromise()
    .then((res:any) =>{
      console.log(res.results);
      return res.results as Todo[];
    })
  }

  toggleTodo(todo:Todo):Promise<void>{
    const url = `${this.baseUrl}${'Todo'}/${todo.objectId}`;
    let updateTodo = {
      ...todo,
      createdAt:null,
      completed:!todo.completed,
      updatedAt:null
    };
    delete updateTodo['createdAt'];
    delete updateTodo['updatedAt'];

    return this.http.put(url,JSON.stringify(updateTodo),{
      headers:this.headers
    }).toPromise()
    .then((res:any) =>{
      console.log(res)
       console.log('todo更新陈工')
    })
  }
  deleteTodo(todo:Todo):Promise<void>{
    const url = `${this.baseUrl}${'Todo'}/${todo.objectId}`;
    return this.http.delete(url,{headers:this.headers})
    .toPromise()
    .then(res=>{
       return null;
    })
    .catch(this.handleError)
  }


  private handleError(err:any):Promise<any>{
     console.error('an error',err);
     return Promise.reject(err.message|| err)
  }


}
