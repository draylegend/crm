import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClassProvider } from '@angular/core';
import { AccessTokenInterceptor } from './access-token.interceptor';

export const provideAuth = (): ClassProvider => ({
  provide: HTTP_INTERCEPTORS,
  useClass: AccessTokenInterceptor,
  multi: true,
});
