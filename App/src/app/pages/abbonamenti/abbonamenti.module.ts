import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbbonamentiPageRoutingModule } from './abbonamenti-routing.module';

import { AbbonamentiPage } from './abbonamenti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbbonamentiPageRoutingModule
  ],
  declarations: [AbbonamentiPage]
})
export class AbbonamentiPageModule {}
