import { Routes } from '@angular/router';
import { AuthGuard } from '@crm/auth/domain';

export const routes = [
  {
    path: '',
    loadComponent: () =>
      import('@crm/admin/feature').then(m => m.AdminComponent),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    providers: [AuthGuard],
    children: [
      {
        path: 'appointments/week',
        loadComponent: () =>
          import('@crm/appointments/week/feature').then(
            m => m.AppointmentsWeekFeatureComponent,
          ),
      },
      { path: '**', redirectTo: 'appointments/week' },
    ],
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('@crm/auth/feature').then(m => m.LoginComponent),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('@crm/auth/feature').then(m => m.RegisterComponent),
      },
      { path: '**', redirectTo: 'login' },
    ],
  },
  { path: '**', redirectTo: '' },
] as Routes;
