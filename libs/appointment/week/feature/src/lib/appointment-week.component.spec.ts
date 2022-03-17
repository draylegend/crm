import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { AppointmentWeekComponent } from './appointment-week.component';

describe('AppointmentWeekFeatureComponent', () => {
  const componentFactory = createComponentFactory(AppointmentWeekComponent);
  let spec: Spectator<AppointmentWeekComponent>;

  beforeAll(() => (spec = componentFactory()));

  it('should create', () => {
    expect(spec.component).toBeTruthy();
  });
});
