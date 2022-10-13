import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { ApplicationConfig } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { authProviders } from '@crm/auth/domain';
import { Env, provideEnv } from '@crm/shared/domain';
import { apiInterceptorProvider } from './api-interceptor.provider';
import { routes } from './core.routes';

export const coreProviders = (env: Env): ApplicationConfig['providers'] => [
  apiInterceptorProvider,
  authProviders,
  importProvidersFrom(HttpClientModule),
  provideRouter(routes),
  provideEnv(env),
];
