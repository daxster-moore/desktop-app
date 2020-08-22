import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CPUComponent } from './cpu.component';

const routes: Routes = [
  {
    path: '',
    component: CPUComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CPURoutingModule {}
