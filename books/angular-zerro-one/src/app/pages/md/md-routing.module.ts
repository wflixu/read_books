import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MdComponent } from './md/md.component';


const routes: Routes = [
  {
    path: '',
    component: MdComponent,
    children: [
      // {
      //   path: '',
      //   component: CrisisListComponent,
      //   children: [
      //     {
      //       path: ':id',
      //       component: CrisisDetailComponent,
      //       canDeactivate: [CanDeactivateGuard],
      //       resolve: {
      //         crisis: CrisisDetailResolverService
      //       }
      //     },
      //     {
      //       path: '',
      //       component: CrisisCenterHomeComponent
      //     }
      //   ]
      // }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MdRoutingModule { }
