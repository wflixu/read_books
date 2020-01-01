import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private headers = new HttpHeaders(
    {
      'Content-type':'application/json',
      'X-LC-Id': 'awgkVY8XvUY5oWtvmzRH6ylj-gzGzoHsz',
      'X-LC-Key': 'GJnJ1a8KVnaVLquMKj6uSllD'
    }
  );

  private sessionToken:string;
  private userId:string;


  constructor(private http:HttpClient, @Inject('user') private userService) { }


  loginWithCredentials(username:string,password:string):Promise<boolean>{

    return this.userService
    .login(username,password)
    .then((user:any) => {

      localStorage.removeItem('userId');

      if (user){
         return true;
      }else{
        return false;
      }

    })
    .catch(this.handleError);
  }
  public getUser():any{
    return JSON.parse (localStorage.getItem('user'));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
