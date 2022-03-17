import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { AppointmentDaysComponent } from './appointment-days.component';

describe('DaysComponent', () => {
  const componentFactory = createComponentFactory(AppointmentDaysComponent);
  let spec: Spectator<AppointmentDaysComponent>;

  beforeEach(() => (spec = componentFactory()));

  it('should create', () => {
    expect(spec.component).toBeTruthy();
  });
});
