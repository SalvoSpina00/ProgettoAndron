import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BisogniPage } from './bisogni.page';

const routes: Routes = [
  {
    path: '',
    component: BisogniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BisogniPageRoutingModule {}
