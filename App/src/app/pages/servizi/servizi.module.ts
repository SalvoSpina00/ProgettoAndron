import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiziPageRoutingModule } from './servizi-routing.module';

import { ServiziPage } from './servizi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiziPageRoutingModule
  ],
  declarations: [ServiziPage]
})
export class ServiziPageModule {}
