import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '@prisma/client';
import { Observable, of } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./appointment-feature.component.scss'],
  templateUrl: './appointment-feature.component.html',
})
export class AppointmentFeatureComponent {
  readonly appointments$: Observable<Appointment[]> = of([
    {
      id: '1',
      start: new Date(2022, 2, 15, 9, 45).toISOString(),
      duration: 30,
    },
  ]);

  constructor(
    private readonly el: ElementRef,
    private readonly router: Router,
  ) {
    el.nativeElement.style.setProperty('--days', 7);
  }

  navigate(appointment: Appointment): void {
    console.log(appointment);
    this.router.navigate(['appointments', 1]);
  }
}
