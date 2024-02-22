import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuovoAbbonamentoPage } from './nuovo-abbonamento.page';

const routes: Routes = [
  {
    path: '',
    component: NuovoAbbonamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuovoAbbonamentoPageRoutingModule {}
