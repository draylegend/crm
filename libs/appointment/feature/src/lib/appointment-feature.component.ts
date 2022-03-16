import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentFacade } from '@crm/appointment/domain';
import { Appointment } from '@prisma/client';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./appointment-feature.component.scss'],
  templateUrl: './appointment-feature.component.html',
})
export class AppointmentFeatureComponent {
  readonly appointments$ = this.facade.entities();

  constructor(
    private readonly facade: AppointmentFacade,
    private readonly el: ElementRef,
    private readonly router: Router,
  ) {
    el.nativeElement.style.setProperty('--days', 7);
  }

  navigate(appointment: Appointment): void {
    this.router.navigate(['appointments', appointment.id]);
  }
}
