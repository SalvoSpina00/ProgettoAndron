import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcquistaAbbonamentoPageRoutingModule } from './acquista-abbonamento-routing.module';

import { AcquistaAbbonamentoPage } from './acquista-abbonamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcquistaAbbonamentoPageRoutingModule
  ],
  declarations: [AcquistaAbbonamentoPage]
})
export class AcquistaAbbonamentoPageModule {}
