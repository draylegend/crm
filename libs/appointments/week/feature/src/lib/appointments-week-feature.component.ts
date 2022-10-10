import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { AppointmentComponent } from '@crm/appointments/week/ui';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  styleUrls: ['./appointments-week-feature.component.scss'],
  templateUrl: './appointments-week-feature.component.html',
  imports: [AppointmentComponent],
})
export class AppointmentsWeekFeatureComponent {
  a1 = new Date();
  a2: Date;

  constructor() {
    const d = new Date();
    d.setDate(12);
    d.setMinutes(0);

    this.a2 = d;
  }

  @HostBinding('style') get style(): Record<string, string | number> {
    return {
      '--hours': 24 * 2,
      '--visibleDays': 7,
    };
  }
}
