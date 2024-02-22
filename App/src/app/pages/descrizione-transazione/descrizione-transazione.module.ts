import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescrizioneTransazionePageRoutingModule } from './descrizione-transazione-routing.module';

import { DescrizioneTransazionePage } from './descrizione-transazione.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescrizioneTransazionePageRoutingModule
  ],
  declarations: [DescrizioneTransazionePage]
})
export class DescrizioneTransazionePageModule {}
