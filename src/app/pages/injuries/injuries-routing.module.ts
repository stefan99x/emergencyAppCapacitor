import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AccessGuard } from 'src/app/guards/access.guard';
import { AddInjuryComponent } from './add-injury/add-injury.component';

import { InjuriesPage } from './injuries.page';
import { UpdateInjuryComponent } from './update-injury/update-injury.component';

const routes: Routes = [
  {
    canActivate: [AccessGuard],
    path: '',
    component: InjuriesPage
  },
  {
    path: 'add-injury',
    component: AddInjuryComponent
  },
  {
    canActivate: [AccessGuard],
    path: 'update-injury',
    component: UpdateInjuryComponent
  },
];

@NgModule({
  declarations: [AddInjuryComponent, UpdateInjuryComponent],
  imports: [RouterModule.forChild(routes), IonicModule, ReactiveFormsModule, CommonModule,FormsModule],
  exports: [RouterModule],
})
export class InjuriesPageRoutingModule { }
