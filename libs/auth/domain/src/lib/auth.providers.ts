import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';
import { AccessTokenInterceptor } from './access-token.interceptor';
import { AuthFacade } from './auth.facade';

export const authProviders: Provider[] = [
  { provide: HTTP_INTERCEPTORS, useClass: AccessTokenInterceptor, multi: true },
  AuthFacade,
];
