import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuovoServizioPage } from './nuovo-servizio.page';

const routes: Routes = [
  {
    path: '',
    component: NuovoServizioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuovoServizioPageRoutingModule {}
