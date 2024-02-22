import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegnalazionePageRoutingModule } from './segnalazione-routing.module';

import { SegnalazionePage } from './segnalazione.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegnalazionePageRoutingModule
  ],
  declarations: [SegnalazionePage]
})
export class SegnalazionePageModule {}
