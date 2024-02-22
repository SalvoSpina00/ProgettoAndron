import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RichiesteMiePage } from './richieste-mie.page';

const routes: Routes = [
  {
    path: '',
    component: RichiesteMiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RichiesteMiePageRoutingModule {}
