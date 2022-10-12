import { Routes } from '@angular/router';

export const routes = [
  {
    path: '',
    loadComponent: () =>
      import('@crm/admin/feature').then(m => m.AdminComponent),
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
