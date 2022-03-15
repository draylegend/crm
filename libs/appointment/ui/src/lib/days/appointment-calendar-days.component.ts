import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-appointment-calendar-days',
  styleUrls: ['./appointment-calendar-days.component.scss'],
  templateUrl: './appointment-calendar-days.component.html',
})
export class AppointmentCalendarDaysComponent {
  @Input() days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
}
