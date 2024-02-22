import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdiniPage } from './ordini.page';

const routes: Routes = [
  {
    path: '',
    component: OrdiniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdiniPageRoutingModule {}
