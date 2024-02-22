import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdottiPage } from './prodotti.page';

const routes: Routes = [
  {
    path: '',
    component: ProdottiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdottiPageRoutingModule {}
