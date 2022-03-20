import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { AppointmentEditFormComponent } from './appointment-edit-form.component';

describe('AppointmentEditFormComponent', () => {
  let spectator: Spectator<AppointmentEditFormComponent>;
  const createComponent = createComponentFactory(AppointmentEditFormComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
