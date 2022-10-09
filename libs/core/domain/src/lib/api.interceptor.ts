import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { ClassProvider, inject, Injectable } from '@angular/core';
import { ENV } from '@crm/shared/domain';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  #env = inject(ENV);

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    if (req.url.includes('/assets/')) {
      return next.handle(req);
    }

    return next.handle(req.clone({ url: `${this.#env.api}${req.url}` }));
  }
}

export const apiInterceptorProvider: ClassProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ApiInterceptor,
  multi: true,
};
