import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuovoProdottoPageRoutingModule } from './nuovo-prodotto-routing.module';

import { NuovoProdottoPage } from './nuovo-prodotto.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    NuovoProdottoPageRoutingModule
  ],
  declarations: [NuovoProdottoPage]
})
export class NuovoProdottoPageModule {}
