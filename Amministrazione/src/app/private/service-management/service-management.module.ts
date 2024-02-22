import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceManagementPageRoutingModule } from './service-management-routing.module';

import { ServiceManagementPage } from './service-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceManagementPageRoutingModule
  ],
  declarations: [ServiceManagementPage]
})
export class ServiceManagementPageModule {}
