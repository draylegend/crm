import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { Appointment } from '@prisma/client';

interface AppointmentStyle {
  left: string;
  'top.px': number;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-appointment-calendar',
  styleUrls: ['./appointment-calendar.component.scss'],
  templateUrl: './appointment-calendar.component.html',
})
export class AppointmentCalendarComponent {
  @Input() appointments: Appointment[] | null = [];
  @Output() selectedChanges = new EventEmitter<Appointment>();

  @HostListener('click') appointmentClick(): void {
    this.selectedChanges.emit();
  }

  getStyle(a: Appointment): AppointmentStyle {
    const date = new Date(a.start);

    return {
      left: `calc(100% / 7 * ${date.getDay()})`,
      'top.px': date.getHours() * 60 + date.getMinutes(),
    };
  }
}
