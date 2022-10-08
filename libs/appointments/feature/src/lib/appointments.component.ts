import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  templateUrl: './appointments.component.html',
  imports: [RouterOutlet],
})
export class AppointmentsComponent {}
