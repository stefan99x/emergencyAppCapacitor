import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';
import { NearbyMessagesPage } from './nearby-messages.page';

const routes: Routes = [
  {
    path: '',
    component: NearbyMessagesPage
  }
];

@NgModule({
  declarations:[ChatMessagesComponent],
  imports: [RouterModule.forChild(routes), IonicModule, ReactiveFormsModule, CommonModule,],
  exports: [RouterModule,ChatMessagesComponent],
})
export class NearbyMessagesPageRoutingModule { }
