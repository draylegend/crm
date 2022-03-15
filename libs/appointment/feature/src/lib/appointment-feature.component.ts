import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Appointment {
  id: any;
  start: number;
}

interface AppointmentStyle {
  left: string;
  'top.px': number;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./appointment-feature.component.scss'],
  templateUrl: './appointment-feature.component.html',
})
export class AppointmentFeatureComponent {
  readonly appointments$: Observable<Appointment[]> = of([
    { id: 1, start: new Date(2022, 2, 15, 9, 45).getTime() },
  ]);

  constructor(private readonly el: ElementRef) {
    el.nativeElement.style.setProperty('--days', 7);
  }

  getStyle(a: Appointment): AppointmentStyle {
    const date = new Date(a.start);

    return {
      left: `calc(100% / 7 * ${date.getDay()})`,
      'top.px': date.getHours() * 60 + date.getMinutes(),
    };
  }
}
