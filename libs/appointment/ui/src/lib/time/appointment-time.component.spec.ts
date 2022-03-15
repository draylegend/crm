import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { AppointmentTimeComponent } from './appointment-time.component';

describe('AppointmentTimeComponent', () => {
  const componentFactory = createComponentFactory(AppointmentTimeComponent);
  let spec: Spectator<AppointmentTimeComponent>;

  beforeEach(() => (spec = componentFactory()));

  it('should create', () => {
    expect(spec.component).toBeTruthy();
  });
});
