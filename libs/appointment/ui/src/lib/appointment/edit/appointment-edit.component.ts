import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';
import {
  ActivatedRoute,
  Event as RouterEvent,
  NavigationEnd,
  Router,
} from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./appointment-edit.component.scss'],
  templateUrl: './appointment-edit.component.html',
})
export class AppointmentEditComponent {
  readonly sub$ = this.#historyPush$();
  readonly #history: string[] = [];

  constructor(
    public readonly route: ActivatedRoute,
    private readonly el: ElementRef,
    private readonly renderer: Renderer2,
    private readonly location: Location,
    private readonly router: Router,
  ) {}

  @HostListener('click', ['$event']) click(
    e: Event & { path: { localName: string }[] },
  ) {
    if (e.path.some(p => p.localName === 'section')) {
      return;
    }

    this.#history.pop();
    if (this.#history.length > 0) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/');
    }
  }

  #historyPush$(): Observable<RouterEvent> {
    return this.router.events.pipe(
      tap(
        event =>
          event instanceof NavigationEnd &&
          this.#history.push(event.urlAfterRedirects),
      ),
    );
  }
}
