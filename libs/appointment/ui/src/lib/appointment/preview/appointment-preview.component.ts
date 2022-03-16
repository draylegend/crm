import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Appointment } from '@prisma/client';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-appointment-preview',
  styleUrls: ['./appointment-preview.component.scss'],
  templateUrl: './appointment-preview.component.html',
})
export class AppointmentPreviewComponent {
  @Input() entity!: Appointment;
}
