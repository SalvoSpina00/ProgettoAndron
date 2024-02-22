import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuovoServizioPageRoutingModule } from './nuovo-servizio-routing.module';

import { NuovoServizioPage } from './nuovo-servizio.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    NuovoServizioPageRoutingModule
  ],
  declarations: [NuovoServizioPage]
})
export class NuovoServizioPageModule {}
