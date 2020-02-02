import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { LoginComponent } from './pages/login/login.component';

import {MainPageComponent } from './pages/main-page/main-page.component';
import { SignPageComponent } from './pages/sign-page/sign-page.component';
import { AuthGuardService } from './core/auth-guard.service';

const routes: Routes = [
  {
    path: "",
    // component:MainPageComponent,
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: 'todo',
    redirectTo:'todo/ALL',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign',
    component:SignPageComponent
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
