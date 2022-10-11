import {
  AsyncPipe,
  FormStyle,
  getLocaleDayNames,
  NgIf,
  TranslationWidth,
} from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  AppointmentComponent,
  DaysComponent,
  HoursComponent,
  PointerTimeDirective,
} from '@crm/appointments/week/ui';
import { map, timer } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  styleUrls: ['./appointments-week-feature.component.scss'],
  templateUrl: './appointments-week-feature.component.html',
  imports: [
    AppointmentComponent,
    AsyncPipe,
    DaysComponent,
    HoursComponent,
    NgIf,
    PointerTimeDirective,
  ],
})
export class AppointmentsWeekFeatureComponent {
  days = getLocaleDayNames(
    navigator.language,
    FormStyle.Format,
    TranslationWidth.Short,
  );
  hours = Array.from({ length: 24 }).map((_, i) => {
    const d = new Date();
    d.setHours(i);
    d.setMinutes(0);

    return new Intl.DateTimeFormat(navigator.language, {
      hour: 'numeric',
      minute: '2-digit',
    }).format(d);
  });
  pointer$ = timer(0, 1000).pipe(
    map(() => new Date()),
    map(d => ({
      time: new Intl.DateTimeFormat(navigator.language, {
        hour: 'numeric',
        minute: '2-digit',
      }).format(d),
      top: d.getHours() * 120 + d.getMinutes() * 2,
    })),
  );
}
