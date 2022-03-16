import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-appointment-days',
  styleUrls: ['./appointment-days.component.scss'],
  templateUrl: './appointment-days.component.html',
})
export class AppointmentDaysComponent {
  @Input() days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
}
