import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiziCollettivitaPageRoutingModule } from './servizi-collettivita-routing.module';

import { ServiziCollettivitaPage } from './servizi-collettivita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ServiziCollettivitaPageRoutingModule
  ],
  declarations: [ServiziCollettivitaPage]
})
export class ServiziCollettivitaPageModule {}
