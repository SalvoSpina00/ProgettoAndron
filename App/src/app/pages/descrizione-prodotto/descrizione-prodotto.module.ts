import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescrizioneProdottoPageRoutingModule } from './descrizione-prodotto-routing.module';

import { DescrizioneProdottoPage } from './descrizione-prodotto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescrizioneProdottoPageRoutingModule
  ],
  declarations: [DescrizioneProdottoPage]
})
export class DescrizioneProdottoPageModule {}
