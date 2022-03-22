import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  type AppointmentInput,
  type AppointmentType,
} from '@crm/appointment/api';
import { type ClientType } from '@crm/client/api';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-appointment-edit-form',
  styleUrls: ['./appointment-edit-form.component.scss'],
  templateUrl: './appointment-edit-form.component.html',
})
export class AppointmentEditFormComponent {
  @Input() clients: ClientType[] | null = [];
  @Output() readonly save = new EventEmitter<AppointmentInput>();

  form = this.fb.group({
    id: '',
    start: 2,
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
    const month =
      d.getMonth() + 1 > 9 ? d.getMonth() + 1 : `0${d.getMonth() + 1}`;
    const hours = d.getHours() > 9 ? d.getHours() : `0${d.getHours()}`;
    const minutes = d.getMinutes() > 9 ? d.getMinutes() : `0${d.getMinutes()}`;

    return `${d.getFullYear()}-${month}-${d.getDate()}T${hours}:${minutes}`;
  }
}
