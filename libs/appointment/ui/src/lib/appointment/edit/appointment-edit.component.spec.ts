import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { AppointmentEditComponent } from './appointment-edit.component';

describe('AppointmentDetailsComponent', () => {
  let spectator: Spectator<AppointmentEditComponent>;
  const createComponent = createComponentFactory(AppointmentEditComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
