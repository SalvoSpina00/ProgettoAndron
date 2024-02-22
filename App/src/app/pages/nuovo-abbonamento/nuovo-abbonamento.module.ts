import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuovoAbbonamentoPageRoutingModule } from './nuovo-abbonamento-routing.module';

import { NuovoAbbonamentoPage } from './nuovo-abbonamento.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    NuovoAbbonamentoPageRoutingModule
  ],
  declarations: [NuovoAbbonamentoPage]
})
export class NuovoAbbonamentoPageModule {}
