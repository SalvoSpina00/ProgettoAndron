import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificaServiziPageRoutingModule } from './certifica-servizi-routing.module';

import { CertificaServiziPage } from './certifica-servizi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificaServiziPageRoutingModule
  ],
  declarations: [CertificaServiziPage]
})
export class CertificaServiziPageModule {}
