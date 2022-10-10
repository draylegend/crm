import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-appointment[date]',
  standalone: true,
  styleUrls: ['./appointment.component.scss'],
  templateUrl: './appointment.component.html',
})
export class AppointmentComponent {
  @Input() date: Date = new Date();

  @HostBinding('style') get style(): Record<string, string | number> {
    const h = this.date.getHours();
    const m = this.date.getMinutes();
    const gridRowStart =
      h * 2 + // An hour can have two appointments
      1 + // Respect starting CSS grid item
      (m > 0 ? 1 : 0); // Check if an appointment starts at a half of hour.
    const gridColumnStart = this.date.getDay();

    return { gridRowStart, gridColumnStart };
  }
}
