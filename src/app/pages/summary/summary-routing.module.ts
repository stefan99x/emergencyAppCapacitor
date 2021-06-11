import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessGuard } from 'src/app/guards/access.guard';

import { SummaryPage } from './summary.page';

const routes: Routes = [
  {
    canActivate:[AccessGuard],
    path: '',
    component: SummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummaryPageRoutingModule {}
