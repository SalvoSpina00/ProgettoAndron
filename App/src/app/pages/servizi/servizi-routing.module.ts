import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiziPage } from './servizi.page';

const routes: Routes = [
  {
    path: '',
    component: ServiziPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiziPageRoutingModule {}
