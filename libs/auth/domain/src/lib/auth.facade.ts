import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthFacade {
  token = new BehaviorSubject({ access: '' });
}
