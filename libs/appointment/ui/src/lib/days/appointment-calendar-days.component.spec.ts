import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { AppointmentCalendarDaysComponent } from './appointment-calendar-days.component';

describe('DaysComponent', () => {
  const componentFactory = createComponentFactory(
    AppointmentCalendarDaysComponent,
  );
  let spec: Spectator<AppointmentCalendarDaysComponent>;

  beforeEach(() => (spec = componentFactory()));

  it('should create', () => {
    expect(spec.component).toBeTruthy();
  });
});
