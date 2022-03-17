import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { AppointmentWeekFeatureComponent } from './appointment-week-feature.component';

describe('FeatureComponent', () => {
  const componentFactory = createComponentFactory(
    AppointmentWeekFeatureComponent,
  );
  let spec: Spectator<AppointmentWeekFeatureComponent>;

  beforeAll(() => (spec = componentFactory()));

  it('should create', () => {
    expect(spec.component).toBeTruthy();
  });
});
