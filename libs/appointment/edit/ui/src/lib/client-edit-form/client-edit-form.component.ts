import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ControlContainer, FormGroupName } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-client-edit-form',
  styleUrls: ['./client-edit-form.component.scss'],
  templateUrl: './client-edit-form.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupName }],
})
export class ClientEditFormComponent {}
