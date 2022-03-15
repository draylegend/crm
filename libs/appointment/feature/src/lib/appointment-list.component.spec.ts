import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { AppointmentListComponent } from './appointment-list.component';

describe('AppointmentComponent', () => {
  const componentFactory = createComponentFactory(AppointmentListComponent);
  let spec: Spectator<AppointmentListComponent>;

  beforeAll(() => (spec = componentFactory()));

  it('should create', () => {
    expect(spec.component).toBeTruthy();
  });
});
