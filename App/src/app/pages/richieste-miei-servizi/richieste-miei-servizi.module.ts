import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RichiesteMieiServiziPageRoutingModule } from './richieste-miei-servizi-routing.module';

import { RichiesteMieiServiziPage } from './richieste-miei-servizi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RichiesteMieiServiziPageRoutingModule
  ],
  declarations: [RichiesteMieiServiziPage]
})
export class RichiesteMieiServiziPageModule {}
