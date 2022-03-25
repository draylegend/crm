import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppFacade {
  readonly title$ = new BehaviorSubject('');
}
