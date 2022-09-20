import { InjectionToken, ValueProvider } from '@angular/core';

export interface Env {
  api: string;
  production: boolean;
}

export const ENV = new InjectionToken<Env>('ENV');

export const provideEnv = (env: Env): ValueProvider => ({
  provide: ENV,
  useValue: env,
});
