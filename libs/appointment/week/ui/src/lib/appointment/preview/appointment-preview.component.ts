import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { type AppointmentType } from '@crm/appointment/api';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-appointment-preview',
  styleUrls: ['./appointment-preview.component.scss'],
  templateUrl: './appointment-preview.component.html',
})
export class AppointmentPreviewComponent {
  @Input() entity!: AppointmentType;
}
