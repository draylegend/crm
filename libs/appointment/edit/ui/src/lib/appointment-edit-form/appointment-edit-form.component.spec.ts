import { ReactiveFormsModule } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { LetModule, PushModule } from '@rx-angular/template';
import { ClientEditFormComponent } from '../client-edit-form/client-edit-form.component';
import { AppointmentEditFormComponent } from './appointment-edit-form.component';

describe('AppointmentEditFormComponent', () => {
  let spectator: Spectator<AppointmentEditFormComponent>;
  const createComponent = createComponentFactory({
    component: AppointmentEditFormComponent,
    declarations: [ClientEditFormComponent],
    imports: [LetModule, PushModule, ReactiveFormsModule],
  });

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
