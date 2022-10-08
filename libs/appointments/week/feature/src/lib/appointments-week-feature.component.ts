import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  templateUrl: './appointments-week-feature.component.html',
})
export class AppointmentsWeekFeatureComponent {}
