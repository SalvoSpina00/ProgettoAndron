import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuovoProdottoPage } from './nuovo-prodotto.page';

const routes: Routes = [
  {
    path: '',
    component: NuovoProdottoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuovoProdottoPageRoutingModule {}
