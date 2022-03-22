import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlContainer, FormGroupName } from '@angular/forms';
import { ClientType } from '@crm/client/api';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-client-edit-form',
  styleUrls: ['./client-edit-form.component.scss'],
  templateUrl: './client-edit-form.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupName }],
})
export class ClientEditFormComponent {
  @Input() clients: ClientType[] | null = [];

  visible = false;
}
