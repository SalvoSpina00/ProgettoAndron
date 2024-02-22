import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RichiestaPage } from './richiesta.page';

const routes: Routes = [
  {
    path: '',
    component: RichiestaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RichiestaPageRoutingModule {}
