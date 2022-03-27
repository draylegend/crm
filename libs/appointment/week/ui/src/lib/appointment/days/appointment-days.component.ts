import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-appointment-days',
  styleUrls: ['./appointment-days.component.scss'],
  templateUrl: './appointment-days.component.html',
})
export class AppointmentDaysComponent {
  displayDays!: { date: number; day: number }[];

  @Input() set days(val: number[]) {
    this.displayDays = val.map(day => ({ day, date: day }));
  }
}
