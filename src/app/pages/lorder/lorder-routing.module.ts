import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LorderPage } from './lorder.page';

const routes: Routes = [
  {
    path: '',
    component: LorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LorderPageRoutingModule {}
