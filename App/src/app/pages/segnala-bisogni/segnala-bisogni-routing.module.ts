import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegnalaBisogniPage } from './segnala-bisogni.page';

const routes: Routes = [
  {
    path: '',
    component: SegnalaBisogniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegnalaBisogniPageRoutingModule {}
