import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateImpresaPageRoutingModule } from './activate-impresa-routing.module';

import { ActivateImpresaPage } from './activate-impresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivateImpresaPageRoutingModule
  ],
  declarations: [ActivateImpresaPage]
})
export class ActivateImpresaPageModule {}
