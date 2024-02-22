import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderManagementPageRoutingModule } from './order-management-routing.module';

import { OrderManagementPage } from './order-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderManagementPageRoutingModule
  ],
  declarations: [OrderManagementPage]
})
export class OrderManagementPageModule {}
