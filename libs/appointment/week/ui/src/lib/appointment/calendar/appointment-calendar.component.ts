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
import { type AppointmentType } from '@crm/appointment/api';
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
  @Input() appointments: AppointmentType[] = [];
  @Output() selectedChanges = new EventEmitter<AppointmentType>();

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

  getStyle(a: AppointmentType): AppointmentStyle {
    const date = new Date(a.start);

    return {
      left: `calc(100% / 7 * ${date.getDay()})`,
      'top.px': date.getHours() * 60 + date.getMinutes(),
    };
  }
}
