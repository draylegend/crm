import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { AppointmentComponent } from './appointment.component';

describe('AppointmentComponent', () => {
  let spectator: Spectator<AppointmentComponent>;
  const createComponent = createComponentFactory(AppointmentComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
