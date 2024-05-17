import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbbonamentiAcquistatiPage } from './abbonamenti-acquistati.page';

const routes: Routes = [
  {
    path: '',
    component: AbbonamentiAcquistatiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbbonamentiAcquistatiPageRoutingModule {}
