import {
  FormStyle,
  getLocaleDayNames,
  TranslationWidth,
} from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import {
  AppointmentComponent,
  DaysComponent,
  HoursComponent,
} from '@crm/appointments/week/ui';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  styleUrls: ['./appointments-week-feature.component.scss'],
  templateUrl: './appointments-week-feature.component.html',
  imports: [AppointmentComponent, DaysComponent, HoursComponent],
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

  @HostBinding('style') get style(): Record<string, string | number> {
    return {
      '--hours': 24 * 2,
      '--visibleDays': 7,
    };
  }
}
