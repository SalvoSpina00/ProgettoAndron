import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeedPageRoutingModule } from './need-routing.module';

import { NeedPage } from './need.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeedPageRoutingModule
  ],
  declarations: [NeedPage]
})
export class NeedPageModule {}
