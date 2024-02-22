import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEntePageRoutingModule } from './add-ente-routing.module';

import { AddEntePage } from './add-ente.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AddEntePageRoutingModule
  ],
  declarations: [AddEntePage]
})
export class AddEntePageModule {}
