import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdottiPageRoutingModule } from './prodotti-routing.module';

import { ProdottiPage } from './prodotti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdottiPageRoutingModule
  ],
  declarations: [ProdottiPage]
})
export class ProdottiPageModule {}
