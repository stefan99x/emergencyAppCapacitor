import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AccessGuard } from 'src/app/guards/access.guard';

import { ProfilePage } from './profile.page';
import { UpdateLocationComponent } from './update-location/update-location.component';
import { UpdateTenantComponent } from './update-tenant/update-tenant.component';

const routes: Routes = [
  {
    canActivate:[AccessGuard],
    path: '',
    component: ProfilePage
  },
  {
    path: 'update-tenant',
    component: UpdateTenantComponent
  },
  {
    path: 'update-location-tenant',
    component: UpdateLocationComponent
  }
];

@NgModule({
  declarations: [UpdateTenantComponent,UpdateLocationComponent],
  imports: [RouterModule.forChild(routes),IonicModule, ReactiveFormsModule, CommonModule,],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
