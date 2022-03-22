import { Location } from '@angular/common';
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
import { type AppointmentInput } from '@crm/appointment/api';
import { AppointmentFacade } from '@crm/appointment/domain';
import { AppointmentEditUiModule } from '@crm/appointment/edit/ui';
import { merge, Observable, tap } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./appointment-edit.component.scss'],
  templateUrl: './appointment-edit.component.html',
})
export class AppointmentEditComponent {
  readonly selected$ = this.facade.selected$(this.route.snapshot.params['id']);
  readonly sub$ = merge(this.#historyPush$(), this.facade.save$);
  readonly #history: string[] = [];

  constructor(
    public readonly facade: AppointmentFacade,
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

  save(input: AppointmentInput): void {
    this.facade.save.next({
      ...input,
      start: new Date(input.start).getTime(),
    });
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
    AppointmentEditUiModule,
    RouterModule.forChild([
      { path: '', component: AppointmentEditComponent },
      { path: '**', redirectTo: '' },
    ]),
  ],
})
export class AppointmentEditFeature {}
