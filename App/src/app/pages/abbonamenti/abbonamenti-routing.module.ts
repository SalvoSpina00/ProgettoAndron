import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbbonamentiPage } from './abbonamenti.page';

const routes: Routes = [
  {
    path: '',
    component: AbbonamentiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbbonamentiPageRoutingModule {}
