import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from './pages/login/login.component';

import {MainPageComponent } from './pages/main-page/main-page.component';
import { SignPageComponent } from './pages/sign-page/sign-page.component';

const routes: Routes = [
  {
    path: "",
    // component:MainPageComponent,
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: 'todo',
    redirectTo:'todo/ALL'
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'sign',
    component:SignPageComponent
  },
  // {
  //   path:'playground',
  //   // loadChildren:'app/pages/playground/playground.module#PlaygroundModule',
  //   loadChildren: () => import('./pages/playground/playground.module').then(mod => mod.PlaygroundModule),
  // },
  {
    path:'playground',
    redirectTo:'playground/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
