import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError, ReplaySubject } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState, Auth, User } from './entities';

import {
  login,
  loginOut,
  sign,
} from './auth.actions';
import { Router } from '@angular/router';
import { X_LC_ID, X_LC_KEY } from './net';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth: Auth = { hasError: true, redirectUrl: '', errMsg: 'not logged in' };
  subject: ReplaySubject<Auth> = new ReplaySubject<Auth>(1);

  private sessionToken: string;
  private userId: string;
  constructor(private http: HttpClient, @Inject('user') private userService,
    // @Inject(X_LC_ID) private appId,
    // @Inject(X_LC_KEY) private appKey,
    private store$: Store<AppState>,
    private router: Router
  ) {

  }

  getAuth(): Observable<Auth> {
    return this.store$.select(appState => appState.auth);
  }

  unAuth(): void {
     this.store$.dispatch(loginOut())
    // Object.assign(
    //   {},
    //   this.auth,
    //   { user: null, hasError: true, redirectUrl: '', errMsg: 'not logged in' });
    // this.subject.next(this.auth);
  }


  loginWithCredentials(username: string, password: string): Observable<Auth> {

    return this.userService
      .login(username, password).pipe(
        map((user: User) => {
          console.log(user)
          localStorage.setItem('user', JSON.stringify({
            sessionToken: user.sessionToken,
            userId: user.userId,
          }));

          let auth = new Auth();
          if (null === user) {
            auth.user = null;
            auth.hasError = true;
            auth.errMsg = 'user not found';
          } else {
            auth.user = user;
            auth.hasError = false;
            auth.errMsg = null;
          }
          this.auth = Object.assign({}, auth);
          this.store$.dispatch(login({auth:this.auth}))
          return this.auth;

        }),
        catchError(this.handleError)
      )
  }
  public getUser(): any {
    return JSON.parse(localStorage.getItem('user'));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
