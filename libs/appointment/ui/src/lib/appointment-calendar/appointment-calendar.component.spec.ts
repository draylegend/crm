import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { AppointmentCalendarComponent } from './appointment-calendar.component';

describe('AppointmentCalendarComponent', () => {
  const componentFactory = createComponentFactory(AppointmentCalendarComponent);
  let spec: Spectator<AppointmentCalendarComponent>;

  beforeEach(() => (spec = componentFactory()));

  it('should create', () => {
    expect(spec.component).toBeTruthy();
  });
});
