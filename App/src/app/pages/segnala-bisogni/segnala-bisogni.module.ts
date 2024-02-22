import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegnalaBisogniPageRoutingModule } from './segnala-bisogni-routing.module';

import { SegnalaBisogniPage } from './segnala-bisogni.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    SegnalaBisogniPageRoutingModule
  ],
  declarations: [SegnalaBisogniPage]
})
export class SegnalaBisogniPageModule {}
