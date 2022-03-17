import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgModule,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { type AppointmentType } from '@crm/appointment/api';
import {
  AppointmentDomainModule,
  AppointmentFacade,
} from '@crm/appointment/domain';
import { AppointmentEditFeature } from '@crm/appointment/edit/feature';
import { AppointmentWeekUiModule } from '@crm/appointment/week/ui';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./appointment-week.component.scss'],
  templateUrl: './appointment-week.component.html',
})
export class AppointmentWeekComponent {
  readonly appointments$ = this.facade.entities$();

  constructor(
    private readonly facade: AppointmentFacade,
    private readonly el: ElementRef,
    private readonly router: Router,
  ) {
    el.nativeElement.style.setProperty('--days', 7);
  }

  navigate(appointment: AppointmentType): void {
    this.router.navigate(['appointments', appointment.id]);
  }
}

@NgModule({
  declarations: [AppointmentWeekComponent],
  imports: [
    AppointmentDomainModule,
    AppointmentWeekUiModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppointmentWeekComponent,
        children: [{ path: ':id', loadChildren: () => AppointmentEditFeature }],
      },
    ]),
  ],
})
export class AppointmentWeekFeature {}
