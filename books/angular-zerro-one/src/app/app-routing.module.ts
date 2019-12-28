import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from './pages/login/login.component';
import {TodoComponent } from './pages/todo/todo.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "todo",
    pathMatch: "full"
  },
  {
    path: 'todo',
    component:TodoComponent
  },
  {
    path: 'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
