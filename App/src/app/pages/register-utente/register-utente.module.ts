import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterUtentePageRoutingModule } from './register-utente-routing.module';

import { RegisterUtentePage } from './register-utente.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterUtentePageRoutingModule
  ],
  declarations: [RegisterUtentePage]
})
export class RegisterUtentePageModule {}
