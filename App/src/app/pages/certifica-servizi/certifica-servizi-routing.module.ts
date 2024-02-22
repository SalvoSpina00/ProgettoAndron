import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificaServiziPage } from './certifica-servizi.page';

const routes: Routes = [
  {
    path: '',
    component: CertificaServiziPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificaServiziPageRoutingModule {}
