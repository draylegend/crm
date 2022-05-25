import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { type AppointmentType } from '@crm/appointment/api';
import {
  AppointmentDomainModule,
  AppointmentFacade,
} from '@crm/appointment/domain';
import { AppointmentEditFeature } from '@crm/appointment/edit/feature';
import { AppointmentWeekUi } from '@crm/appointment/week/ui';
import { AppFacade } from '@crm/shared/domain';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./appointment-week.component.scss'],
  templateUrl: './appointment-week.component.html',
})
export class AppointmentWeekComponent {
  constructor(
    public readonly appFacade: AppFacade,
    public readonly facade: AppointmentFacade,
    private readonly router: Router,
  ) {
    appFacade.title$.next('Appointments');
  }

  navigate(appointment: AppointmentType): void {
    this.router.navigate(['appointments', appointment.id]);
  }
}

@NgModule({
  declarations: [AppointmentWeekComponent],
  imports: [
    AppointmentDomainModule,
    AppointmentWeekUi,
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
