import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEntePage } from './add-ente.page';

const routes: Routes = [
  {
    path: '',
    component: AddEntePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEntePageRoutingModule {}
