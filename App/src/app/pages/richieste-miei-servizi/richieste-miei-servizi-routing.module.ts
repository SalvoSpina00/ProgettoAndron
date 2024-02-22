import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RichiesteMieiServiziPage } from './richieste-miei-servizi.page';

const routes: Routes = [
  {
    path: '',
    component: RichiesteMieiServiziPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RichiesteMieiServiziPageRoutingModule {}
