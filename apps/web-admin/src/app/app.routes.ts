import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () =>
      import('@crm/admin/feature').then(m => m.AdminComponent),
    children: [
      {
        path: 'appointments',
        loadComponent: () =>
          import('@crm/appointments/feature').then(
            m => m.AppointmentsComponent,
          ),
      },
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
