import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescrizioneProdottoPage } from './descrizione-prodotto.page';

const routes: Routes = [
  {
    path: '',
    component: DescrizioneProdottoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescrizioneProdottoPageRoutingModule {}
