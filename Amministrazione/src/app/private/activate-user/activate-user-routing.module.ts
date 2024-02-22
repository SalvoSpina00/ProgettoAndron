import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivateUserPage } from './activate-user.page';

const routes: Routes = [
  {
    path: '',
    component: ActivateUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivateUserPageRoutingModule {}
