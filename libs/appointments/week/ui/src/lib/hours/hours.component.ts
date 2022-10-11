import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-hours',
  standalone: true,
  templateUrl: './hours.component.html',
})
export class HoursComponent {}
