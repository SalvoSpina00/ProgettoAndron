import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RichiestaPageRoutingModule } from './richiesta-routing.module';

import { RichiestaPage } from './richiesta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RichiestaPageRoutingModule
  ],
  declarations: [RichiestaPage]
})
export class RichiestaPageModule {}
