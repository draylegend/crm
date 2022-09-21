import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  templateUrl: './appointments.component.html',
})
export class AppointmentsComponent {}
