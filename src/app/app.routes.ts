import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { noAuthGuard } from './core/guards/no-auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    canActivate: [noAuthGuard],
    loadChildren: () =>
      import('./modules/auth/auth-routing.module').then(
        (m) => m.AuthRoutingModule
      ),
  },
  {
    path: '',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./modules/dashboard/dashboard-routing.module').then(
        (m) => m.MainAppRoutingModule
      ),
  },
];
