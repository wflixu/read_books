import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { LoginComponent } from './components/login/login.component';

import {MainPageComponent } from './pages/main-page/main-page.component';
import { SignPageComponent } from './pages/sign-page/sign-page.component';
import { AuthGuardService } from './core/auth-guard.service';
import { SignComponent } from './core/sign/sign.component';

const routes: Routes = [
  {
    path: "",
    // component:MainPageComponent,
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign',
    component: SignComponent
  },
  {
    path: 'sign',
    component:SignPageComponent
  },
  {
    path: 'todos',
    loadChildren: () => import('./pages/todo/todo.module').then(m => m.TodoModule),
    data: { preload: false }
  },
  {
    path: 'md',
    loadChildren: () => import('./pages/md/md.module').then(m => m.MdModule),
    data: { preload: false }
  },
  {
    path: 'chart',
    loadChildren: () => import('./pages/chart/chart.module').then(m => m.ChartModule),
    data: { preload: false },
    // canLoad: [AuthGuardService]
  },
  {
    path: 'pipe',
    loadChildren: () => import('./pages/pipe/pipe.module').then(m => m.PipeModule),
    data: { preload: false },
  },
  {
    path: 'animate',
    loadChildren: () => import('./pages/animate/animate.module').then(m => m.AnimateModule),
    data: { preload: false },
  },
  {
    // rxjs play
    path: 'rx',
    loadChildren: () => import('./rx/rx.module').then(m => m.RxModule),
    data: { preload: false },
  },
  {
    path:'playground',
    loadChildren: () => import('./pages/playground/playground.module').then(mod => mod.PlaygroundModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
