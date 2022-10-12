import { HttpClientModule } from '@angular/common/http';
import {
  ImportedNgModuleProviders,
  importProvidersFrom,
  Provider,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { authProvider } from '@crm/auth/domain';
import { Env, provideEnv } from '@crm/shared/domain';
import { routes } from './core.routes';

export const coreProviders = (
  env: Env,
): (Provider | ImportedNgModuleProviders)[] => [
  authProvider,
  importProvidersFrom(HttpClientModule),
  provideRouter(routes),
  provideEnv(env),
];
