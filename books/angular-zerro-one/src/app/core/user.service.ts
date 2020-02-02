import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { User } from './entities';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  private headers = new HttpHeaders(
    {
      'Content-type':'application/json',
      'X-LC-Id': 'awgkVY8XvUY5oWtvmzRH6ylj-gzGzoHsz',
      'X-LC-Key': 'GJnJ1a8KVnaVLquMKj6uSllD'
    }
  );

  private api_url = 'https://awgkvy8x.lc-cn-n1-shared.com/1.1/login';

  constructor(private http: HttpClient) { }

  findUser(username: string): Promise<User> {
    const url = `${this.api_url}/?username=${username}`;
    return this.http.get(url)
              .toPromise()
              .then(res => {
                let users = res as User[];
                return (users.length>0)?users[0]:null;
              })
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  login(username:string,password:string):Observable<User>{
     return this.http.post(this.api_url,{
       username:username,
       password:password,
     },{
       headers:this.headers
     }).pipe(
       map((res:any)=>{
          return {
            username:res.username,
            userId:res.objectId,
            sessionToken:res.sessionToken
          }
       })
     )
  }
}

