import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';
import {AuthGuardService} from '../../core/auth-guard.service';
import { NgModule } from '@angular/core';


export const routes: Routes = [
  {
    path: 'todos/:filter',
    canActivate:[AuthGuardService],
    component: TodoComponent
  }
];
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class TodoRoutingModule{};
