import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfofeedbackPageRoutingModule } from './infofeedback-routing.module';

import { InfofeedbackPage } from './infofeedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfofeedbackPageRoutingModule
  ],
  declarations: [InfofeedbackPage]
})
export class InfofeedbackPageModule {}
