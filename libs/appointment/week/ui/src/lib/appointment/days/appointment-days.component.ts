import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-appointment-days',
  styleUrls: ['./appointment-days.component.scss'],
  templateUrl: './appointment-days.component.html',
})
export class AppointmentDaysComponent {
  readonly dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  displayDays!: { date: number; day: number }[];

  @Input() set days(val: number[]) {
    const d: Date = new Date();
    const firstDay = d.getDate() - d.getDay();

    this.displayDays = val.map(day => ({ day, date: firstDay + day }));
  }
}
