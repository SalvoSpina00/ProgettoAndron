import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeedPage } from './need.page';

const routes: Routes = [
  {
    path: '',
    component: NeedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeedPageRoutingModule {}
