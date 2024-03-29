import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClassProvider } from '@angular/core';
import { ApiInterceptor } from './api.interceptor';

export const apiInterceptorProvider: ClassProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ApiInterceptor,
  multi: true,
};
