import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddImpresaPageRoutingModule } from './add-impresa-routing.module';

import { AddImpresaPage } from './add-impresa.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AddImpresaPageRoutingModule
  ],
  declarations: [AddImpresaPage]
})
export class AddImpresaPageModule {}
