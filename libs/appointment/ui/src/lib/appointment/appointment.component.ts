import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Appointment } from '@prisma/client';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-appointment',
  styleUrls: ['./appointment.component.scss'],
  templateUrl: './appointment.component.html',
})
export class AppointmentComponent {
  @Input() entity!: Appointment;
}
