import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateUserPageRoutingModule } from './activate-user-routing.module';

import { ActivateUserPage } from './activate-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivateUserPageRoutingModule
  ],
  declarations: [ActivateUserPage]
})
export class ActivateUserPageModule {}
