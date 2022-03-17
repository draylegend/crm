import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgModule,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppointmentType } from '@crm/appointment/api';
import {
  AppointmentDomainModule,
  AppointmentFacade,
} from '@crm/appointment/domain';
import { AppointmentUiModule } from '@crm/appointment/ui';
import { AppointmentEditComponent } from './edit/appointment-edit.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./appointment-week-feature.component.scss'],
  templateUrl: './appointment-week-feature.component.html',
})
export class AppointmentWeekFeatureComponent {
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
  declarations: [AppointmentEditComponent, AppointmentWeekFeatureComponent],
  imports: [
    AppointmentDomainModule,
    AppointmentUiModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppointmentWeekFeatureComponent,
        children: [{ path: ':id', component: AppointmentEditComponent }],
      },
    ]),
  ],
})
export class AppointmentWeekFeatureModule {}
