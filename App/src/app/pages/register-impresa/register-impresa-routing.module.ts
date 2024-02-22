import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterImpresaPage } from './register-impresa.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterImpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterImpresaPageRoutingModule {}
