import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full'
  },
  {
    path: 'authentication',
    loadChildren: () => import('./pages/authentication/authentication.module').then( m => m.AuthenticationPageModule)
  },
  {
    
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'injuries',
    loadChildren: () => import('./pages/injuries/injuries.module').then( m => m.InjuriesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'status-tenants',
    loadChildren: () => import('./pages/status-tenants/status-tenants.module').then( m => m.StatusTenantsPageModule)
  },
  {
    path: 'summary',
    loadChildren: () => import('./pages/summary/summary.module').then( m => m.SummaryPageModule)
  },
  {
    path: 'nearby-messages',
    loadChildren: () => import('./pages/nearby-messages/nearby-messages.module').then( m => m.NearbyMessagesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
