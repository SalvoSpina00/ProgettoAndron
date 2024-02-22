import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterUtentePage } from './register-utente.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterUtentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterUtentePageRoutingModule {}
