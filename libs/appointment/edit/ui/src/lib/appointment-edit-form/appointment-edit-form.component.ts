import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { type AppointmentType } from '@crm/appointment/api';

@Component({
  selector: 'crm-appointment-edit-form',
  templateUrl: './appointment-edit-form.component.html',
  styleUrls: ['./appointment-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentEditFormComponent {
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

  constructor(private readonly fb: FormBuilder) {
    this.form.valueChanges.subscribe(console.log);
  }

  @Input() set entity(value: AppointmentType | undefined) {
    this.form.setValue({
      ...value,
      start: new Date(value?.start || '').toISOString().slice(0, 16),
    });
  }
}
