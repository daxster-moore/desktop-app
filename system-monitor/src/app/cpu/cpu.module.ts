import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CPUComponent } from './cpu.component';

import { CPURoutingModule } from './cpu-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CPURoutingModule,
  ],
  declarations: [CPUComponent]
})
export class CPUModule {}