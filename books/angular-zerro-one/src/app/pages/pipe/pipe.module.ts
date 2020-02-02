import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeRoutingModule } from './pipe-routing.module';
import { PipeComponent } from './pipe.component';
import { TrimPipe } from './trim.pipe';


@NgModule({
  declarations: [PipeComponent, TrimPipe],
  imports: [
    CommonModule,
    PipeRoutingModule
  ]
})
export class PipeModule { }
