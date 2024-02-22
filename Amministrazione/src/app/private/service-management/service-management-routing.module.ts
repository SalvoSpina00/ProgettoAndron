import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceManagementPage } from './service-management.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceManagementPageRoutingModule {}
