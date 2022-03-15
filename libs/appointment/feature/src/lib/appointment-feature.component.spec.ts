import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { AppointmentFeatureComponent } from './appointment-feature.component';

describe('AppointmentFeatureComponent', () => {
  const componentFactory = createComponentFactory(AppointmentFeatureComponent);
  let spec: Spectator<AppointmentFeatureComponent>;

  beforeAll(() => (spec = componentFactory()));

  it('should create', () => {
    expect(spec.component).toBeTruthy();
  });
});
