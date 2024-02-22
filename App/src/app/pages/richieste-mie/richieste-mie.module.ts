import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RichiesteMiePageRoutingModule } from './richieste-mie-routing.module';

import { RichiesteMiePage } from './richieste-mie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RichiesteMiePageRoutingModule
  ],
  declarations: [RichiesteMiePage]
})
export class RichiesteMiePageModule {}
