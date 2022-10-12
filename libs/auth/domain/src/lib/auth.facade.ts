import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthFacade {
  token = new BehaviorSubject({ access: '' });

  constructor(private router: Router) {}

  navToLogin(): void {
    this.router.navigate(['/auth/login']);
  }
}
