import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimateComponent } from './animate.component';


const routes: Routes = [
  {
    path: '',
    component: AnimateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimateRoutingModule { }
