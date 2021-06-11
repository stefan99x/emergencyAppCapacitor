import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessGuard } from 'src/app/guards/access.guard';

import { StatusTenantsPage } from './status-tenants.page';

const routes: Routes = [
  {
    canActivate:[AccessGuard],
    path: '',
    component: StatusTenantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatusTenantsPageRoutingModule {}
