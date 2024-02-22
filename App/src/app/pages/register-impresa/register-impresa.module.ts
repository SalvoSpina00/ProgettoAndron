import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterImpresaPageRoutingModule } from './register-impresa-routing.module';

import { RegisterImpresaPage } from './register-impresa.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterImpresaPageRoutingModule
  ],
  declarations: [RegisterImpresaPage]
})
export class RegisterImpresaPageModule {}
