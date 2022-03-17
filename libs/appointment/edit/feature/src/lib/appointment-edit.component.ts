import { CommonModule, Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  NgModule,
} from '@angular/core';
import {
  ActivatedRoute,
  Event as RouterEvent,
  NavigationEnd,
  Router,
  RouterModule,
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
    private readonly location: Location,
    private readonly router: Router,
  ) {}

  @HostListener('click', ['$event.target']) click(e: HTMLElement) {
    if (e.closest('section')) {
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

@NgModule({
  declarations: [AppointmentEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AppointmentEditComponent },
      { path: '**', redirectTo: '' },
    ]),
  ],
})
export class AppointmentEditFeature {}
