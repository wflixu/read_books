import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdRoutingModule } from './md-routing.module';
import { MdComponent } from './md/md.component';


@NgModule({
  declarations: [MdComponent],
  imports: [
    CommonModule,
    MdRoutingModule
  ]
})
export class MdModule { }
