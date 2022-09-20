import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { ClassProvider, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(
      req.clone({
        headers: new HttpHeaders({
          Authorization: 'Admin some-access-token',
        }),
      }),
    );
  }
}

export const accessTokenInterceptor: ClassProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AccessTokenInterceptor,
  multi: true,
};
