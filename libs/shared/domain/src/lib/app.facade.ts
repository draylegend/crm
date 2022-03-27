import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppFacade {
  readonly title$ = new BehaviorSubject('');
  readonly toolbarActions$ = new BehaviorSubject<TemplateRef<unknown> | null>(
    null,
  );

  constructor(@Inject(DOCUMENT) private readonly doc: Document) {}

  setProp(cssVar: string, val: string | number): void {
    this.doc.body.style.setProperty(`--${cssVar}`, `${val}`);
  }
}
