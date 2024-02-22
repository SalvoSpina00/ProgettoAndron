import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivateImpresaPage } from './activate-impresa.page';

const routes: Routes = [
  {
    path: '',
    component: ActivateImpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivateImpresaPageRoutingModule {}
