import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-appointment-edit',
  templateUrl: './appointment-edit.component.html',
})
export class AppointmentEditComponent {}
