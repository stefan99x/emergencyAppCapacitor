import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearbyMessagesPageRoutingModule } from './nearby-messages-routing.module';

import { NearbyMessagesPage } from './nearby-messages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NearbyMessagesPageRoutingModule,
  ],
  declarations: [NearbyMessagesPage]
})
export class NearbyMessagesPageModule {}
