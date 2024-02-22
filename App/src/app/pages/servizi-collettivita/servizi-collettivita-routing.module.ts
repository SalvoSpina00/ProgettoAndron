import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiziCollettivitaPage } from './servizi-collettivita.page';

const routes: Routes = [
  {
    path: '',
    component: ServiziCollettivitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiziCollettivitaPageRoutingModule {}
