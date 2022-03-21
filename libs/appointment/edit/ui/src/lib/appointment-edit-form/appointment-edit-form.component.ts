import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { type AppointmentType } from '@crm/appointment/api';

@Component({
  selector: 'crm-appointment-edit-form',
  templateUrl: './appointment-edit-form.component.html',
  styleUrls: ['./appointment-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentEditFormComponent {
  @Output() readonly save = new EventEmitter<AppointmentType>();

  form = this.fb.group({
    id: '',
    start: 0,
    duration: 30,
    __typename: 'AppointmentType',
    client: this.fb.group({
      id: '',
      firstName: '',
      __typename: 'ClientType',
    }),
  });

  constructor(private readonly fb: FormBuilder) {}

  @Input() set entity(value: AppointmentType) {
    this.form.setValue({
      ...value,
      start: this.#getDateTime(value.start),
    });
  }

  #getDateTime(value: number): string {
    const d = new Date(value);
    const month = d.getMonth() > 9 ? d.getMonth() : `0${d.getMonth()}`;
    const hours = d.getHours() > 9 ? d.getHours() : `0${d.getHours()}`;
    const minutes = d.getMinutes() > 9 ? d.getMinutes() : `0${d.getMinutes()}`;

    return `${d.getFullYear()}-${month}-${d.getDate()}T${hours}:${minutes}`;
  }
}
