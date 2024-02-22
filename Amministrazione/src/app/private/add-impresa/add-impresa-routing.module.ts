import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddImpresaPage } from './add-impresa.page';

const routes: Routes = [
  {
    path: '',
    component: AddImpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddImpresaPageRoutingModule {}
