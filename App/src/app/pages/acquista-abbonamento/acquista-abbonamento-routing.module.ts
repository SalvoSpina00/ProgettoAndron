import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcquistaAbbonamentoPage } from './acquista-abbonamento.page';

const routes: Routes = [
  {
    path: '',
    component: AcquistaAbbonamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcquistaAbbonamentoPageRoutingModule {}
