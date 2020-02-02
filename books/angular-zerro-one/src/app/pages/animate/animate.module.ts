import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzButtonModule } from 'ng-zorro-antd/button';

import { AnimateRoutingModule } from './animate-routing.module';
import { AnimateComponent } from './animate.component';


@NgModule({
  declarations: [AnimateComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    AnimateRoutingModule
  ]
})
export class AnimateModule { }
