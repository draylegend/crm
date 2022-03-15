import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { AppointmentComponent } from './appointment.component';

describe('AppointmentComponent', () => {
  const componentFactory = createComponentFactory(AppointmentComponent);
  let spec: Spectator<AppointmentComponent>;

  beforeAll(() => (spec = componentFactory()));

  it('should create', () => {
    expect(spec.component).toBeTruthy();
  });
});
