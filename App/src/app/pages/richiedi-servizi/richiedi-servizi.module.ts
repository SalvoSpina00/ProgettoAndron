import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RichiediServiziPageRoutingModule } from './richiedi-servizi-routing.module';

import { RichiediServiziPage } from './richiedi-servizi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RichiediServiziPageRoutingModule
  ],
  declarations: [RichiediServiziPage]
})
export class RichiediServiziPageModule {}
