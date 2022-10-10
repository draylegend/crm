import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  styleUrls: ['./appointments-week-feature.component.scss'],
  templateUrl: './appointments-week-feature.component.html',
})
export class AppointmentsWeekFeatureComponent {
  @HostBinding('style') get style(): Record<string, string | number> {
    return {
      '--visibleDays': 7,
    };
  }
}
