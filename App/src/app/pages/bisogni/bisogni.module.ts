import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BisogniPageRoutingModule } from './bisogni-routing.module';

import { BisogniPage } from './bisogni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BisogniPageRoutingModule
  ],
  declarations: [BisogniPage]
})
export class BisogniPageModule {}
