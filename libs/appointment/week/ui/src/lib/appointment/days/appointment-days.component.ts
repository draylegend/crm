import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-appointment-days',
  styleUrls: ['./appointment-days.component.scss'],
  templateUrl: './appointment-days.component.html',
})
export class AppointmentDaysComponent {
  @Input() toolbar$!: BehaviorSubject<TemplateRef<unknown> | null>;
  @Output() weekNumber = new EventEmitter<number>();

  readonly dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  displayDays!: { date: number; day: number }[];

  @Input() set days(val: number[]) {
    const d = new Date();
    const firstDay = d.getDate() - d.getDay();

    this.displayDays = val.map(day => ({ day, date: firstDay + day }));
  }

  @ViewChild('toolbarActions') set toolbarActions(
    ref: TemplateRef<unknown> | undefined,
  ) {
    ref && this.toolbar$.next(ref);
  }
}
