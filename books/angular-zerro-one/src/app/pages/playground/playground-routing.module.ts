import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from '../../core/auth-guard.service';
import { PlaygroundComponent } from './playground.component';



const routes:Routes =[
  {
    path:'',
    component:PlaygroundComponent
  }
]
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class PlaygroundRoutingModule{};
