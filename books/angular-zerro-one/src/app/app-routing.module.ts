import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from './pages/login/login.component';
import {TodoComponent } from './pages/todo/todo.component';
import {MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: "",
    component:MainPageComponent,
    // redirectTo: "todo",
    // pathMatch: "full"
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
