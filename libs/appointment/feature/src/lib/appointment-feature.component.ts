import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { of } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./appointment-feature.component.scss'],
  templateUrl: './appointment-feature.component.html',
})
export class AppointmentFeatureComponent {
  readonly appointments$ = of([
    { id: 1, start: new Date(2022, 2, 15, 9, 45).getTime() },
  ]);

  constructor(private readonly el: ElementRef) {
    el.nativeElement.style.setProperty('--days', 7);
  }
}
