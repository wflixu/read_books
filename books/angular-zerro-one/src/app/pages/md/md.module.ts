import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzGridModule } from 'ng-zorro-antd/grid';

import { MdRoutingModule } from './md-routing.module';
import { MdComponent } from './md/md.component';


@NgModule({
  declarations: [MdComponent],
  imports: [
    CommonModule,
    NzGridModule,
    MdRoutingModule,
  ]
})
export class MdModule { }
