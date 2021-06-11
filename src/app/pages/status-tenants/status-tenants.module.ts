import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusTenantsPageRoutingModule } from './status-tenants-routing.module';

import { StatusTenantsPage } from './status-tenants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusTenantsPageRoutingModule
  ],
  declarations: [StatusTenantsPage]
})
export class StatusTenantsPageModule {}
