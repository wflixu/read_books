import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  loginWithCredentials(username:string,password:string):boolean{
    if (username === 'test') {
      return true;
    } else {
      return false;
    }
  }
}
