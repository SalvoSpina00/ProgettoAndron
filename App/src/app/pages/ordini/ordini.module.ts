import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdiniPageRoutingModule } from './ordini-routing.module';

import { OrdiniPage } from './ordini.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdiniPageRoutingModule
  ],
  declarations: [OrdiniPage]
})
export class OrdiniPageModule {}
