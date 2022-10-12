import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthFacade } from './auth.facade';

@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {
  constructor(private facade: AuthFacade) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(
      req.clone({
        headers: new HttpHeaders({
          Authorization: this.facade.token.getValue().access,
        }),
      }),
    );
  }
}
