import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InjuriesPageRoutingModule } from './injuries-routing.module';

import { InjuriesPage } from './injuries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InjuriesPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [InjuriesPage]
})
export class InjuriesPageModule {}
