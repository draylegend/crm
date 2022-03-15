import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-appointment',
  styleUrls: ['./appointment.component.scss'],
  templateUrl: './appointment.component.html',
})
export class AppointmentComponent {}
