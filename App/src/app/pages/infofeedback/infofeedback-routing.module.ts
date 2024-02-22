import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfofeedbackPage } from './infofeedback.page';

const routes: Routes = [
  {
    path: '',
    component: InfofeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfofeedbackPageRoutingModule {}
