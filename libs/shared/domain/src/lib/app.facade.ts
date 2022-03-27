import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppFacade {
  readonly title$ = new BehaviorSubject('');

  constructor(@Inject(DOCUMENT) private readonly doc: Document) {}

  setProp(cssVar: string, val: string | number): void {
    this.doc.body.style.setProperty(`--${cssVar}`, `${val}`);
  }
}
