import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompraPage } from './compra.page';

const routes: Routes = [
  {
    path: '',
    component: CompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompraPageRoutingModule {}
