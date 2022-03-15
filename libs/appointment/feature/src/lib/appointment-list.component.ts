import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

interface Appointment {
  id: any;
  start: number;
}

interface AppointmentStyle {
  left: string;
  'top.px': number;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./appointment-list.component.scss'],
  templateUrl: './appointment-list.component.html',
})
export class AppointmentListComponent {
  readonly pointer$ = interval(1000).pipe(tap(() => this.#updatePointer()));
  readonly appointments$: Observable<Appointment[]> = of([
    { id: 1, start: new Date(2022, 2, 15, 9, 45).getTime() },
  ]);

  constructor(private readonly el: ElementRef) {
    el.nativeElement.style.setProperty('--days', 7);
  }

  getStyle(a: Appointment): AppointmentStyle {
    const date = new Date(a.start);

    return {
      left: `calc(100% / 7 * ${date.getDay()})`,
      'top.px': date.getHours() * 60 + date.getMinutes(),
    };
  }

  #updatePointer(): void {
    const date = new Date();

    this.el.nativeElement.style.setProperty('--pointerLeft', date.getDay());
    this.el.nativeElement.style.setProperty(
      '--pointerTop',
      date.getHours() * 60 + date.getMinutes(),
    );
  }
}
