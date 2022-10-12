import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { AuthFacade } from './auth.facade';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private facade: AuthFacade) {}

  canActivate(): boolean {
    return this.#can();
  }

  canLoad(): boolean {
    return this.#can();
  }

  #can(): boolean {
    return this.facade.token.getValue().access
      ? true
      : (this.facade.navToLogin(), false);
  }
}
