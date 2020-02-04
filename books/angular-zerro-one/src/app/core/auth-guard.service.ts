import { Injectable, Inject } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanLoad,
  Route,
  UrlSegment
} from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppState, Auth, User } from './entities';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {


  constructor(private router: Router, private store$: Store<AppState>) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const url: string = state.url;
    return this.store$.select(appState=>appState.auth).pipe(
      map((auth: Auth) => !auth.hasError)
    );
  }
  canLoad(route: Route): Observable<boolean> {
    return this.store$.select(appState=>appState.auth).pipe(
      map((auth: Auth) => {
        console.log(auth);
        return !auth.hasError;
      })
    )
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.canActivate(route, state);
  }

}
