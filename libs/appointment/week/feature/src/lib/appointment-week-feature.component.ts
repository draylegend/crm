import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { type AppointmentType } from '@crm/appointment/api';
import { AppointmentFacade } from '@crm/appointment/domain';

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
