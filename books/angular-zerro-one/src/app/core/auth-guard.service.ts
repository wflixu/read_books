import { Injectable, Inject } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanLoad,
  Route,
  UrlSegment} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Auth } from './entities';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild,CanLoad {


  constructor(private router: Router, @Inject('auth')private authService ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> {
    console.log('111111111111');
    let url: string = state.url;
    return this.authService.getAuth().pipe(
      map((auth:Auth)=>!auth.hasError)
    );
  }
  canLoad(route: Route):Observable<boolean>{
    console.log('22222222222222222');
    return this.authService.getAuth().pipe(
      map((auth:Auth)=>{
        console.log(auth);
         return !auth.hasError;
      })
    )
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean|Observable<boolean> {
    return this.canActivate(route, state);
  }

}
