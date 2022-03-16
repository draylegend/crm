import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Appointment } from '@prisma/client';
import { AppointmentPreviewComponent } from '../preview/appointment-preview.component';

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

  @ViewChildren(AppointmentPreviewComponent)
  readonly previews!: QueryList<AppointmentPreviewComponent>;

  @HostListener('click', ['$event.target']) appointmentClick(
    target: HTMLElement,
  ): void {
    const found = target.closest('crm-appointment-preview');

    if (found) {
      const c = this.previews.get(+found.id);
      c && this.selectedChanges.emit(c.entity);
    }
  }

  getStyle(a: Appointment): AppointmentStyle {
    const date = new Date(a.start);

    return {
      left: `calc(100% / 7 * ${date.getDay()})`,
      'top.px': date.getHours() * 60 + date.getMinutes(),
    };
  }
}
