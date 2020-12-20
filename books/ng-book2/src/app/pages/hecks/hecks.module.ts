import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HecksRoutingModule } from './hecks-routing.module';
import { HecksComponent } from './hecks.component';
import { HecksEditComponent } from './hecks-edit/hecks-edit.component';


@NgModule({
  declarations: [HecksComponent, HecksEditComponent],
  imports: [
    CommonModule,
    HecksRoutingModule
  ],
})
export class HecksModule { }
