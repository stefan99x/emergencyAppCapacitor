import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AccessGuard } from 'src/app/guards/access.guard';

import { AuthenticationPage } from './authentication.page';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationPage
  },
  {
    path: 'register',
    component: RegisterPageComponent
  }
];

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [RouterModule.forChild(routes),IonicModule, ReactiveFormsModule, CommonModule, ],
  exports: [RouterModule],
})
export class AuthenticationPageRoutingModule { }
