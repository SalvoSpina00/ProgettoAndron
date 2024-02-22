import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RichiediServiziPage } from './richiedi-servizi.page';

const routes: Routes = [
  {
    path: '',
    component: RichiediServiziPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RichiediServiziPageRoutingModule {}
