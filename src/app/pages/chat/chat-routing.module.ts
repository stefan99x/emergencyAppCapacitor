import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AccessGuard } from 'src/app/guards/access.guard';
import { ChatMessageComponent } from './chat-message/chat-message.component';

import { ChatPage } from './chat.page';

const routes: Routes = [
  {
    canActivate:[AccessGuard],
    path: '',
    component: ChatPage
  }
];

@NgModule({
  declarations: [ChatMessageComponent],
  imports: [RouterModule.forChild(routes),IonicModule, ReactiveFormsModule, CommonModule,],
  exports: [ChatMessageComponent,RouterModule],
})
export class ChatPageRoutingModule {}
