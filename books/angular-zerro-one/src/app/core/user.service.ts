import { Inject, Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { User } from './entities';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { X_LC_ID, X_LC_KEY } from './net';

@Injectable()
export class UserService {
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    @Inject(X_LC_ID) private appId,
    @Inject(X_LC_KEY) private appKey,
    @Inject('urls') private urls
  ) {
    this.headers = new HttpHeaders({
      'Content-type': 'application/json',
      'X-LC-Id': appId,
      'X-LC-Key': appKey,
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  public getHttpHeaders(): HttpHeaders{
    return this.headers;
  }
  public login(username: string, password: string): Observable<User> {
    return this.http
      .post(
        this.urls.login,
        {
          username,
          password,
        },
        {
          headers: this.headers,
        }
      )
      .pipe(
        tap((res: any) => {
          this.headers.set('X-LC-Session', res.sessionToken as string);
        }),
        map((res: any) => {
          return {
            username: res.username,
            userId: res.objectId,
            sessionToken: res.sessionToken,
          };
        })
      );
  }
  public sign(username: string, password: string): Observable<User> {
    return this.http
      .post(
        this.urls.sign,
        {
          username,
          password,
        },
        {
          headers: this.headers,
        }
      )
      .pipe(
        map((res: any) => {
          return {
            username: res.username,
            userId: res.objectId,
            sessionToken: res.sessionToken,
          };
        })
      );
  }
  public findUser(username: string): Observable<boolean> {
    return this.http
      .get(this.urls.sign, {
        headers: this.headers,
      })
      .pipe(
        map((res: any) => {
          if (res && res.results) {
            let users = res.results.filter(
              (user) => user.username === username
            );
            if (users.length > 0) {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        })
      );
  }
}
