import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-appointment',
  templateUrl: './appointment.component.html',
})
export class AppointmentComponent {}
