import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbbonamentiAcquistatiPageRoutingModule } from './abbonamenti-acquistati-routing.module';

import { AbbonamentiAcquistatiPage } from './abbonamenti-acquistati.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbbonamentiAcquistatiPageRoutingModule
  ],
  declarations: [AbbonamentiAcquistatiPage]
})
export class AbbonamentiAcquistatiPageModule {}
