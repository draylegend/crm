import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { AppointmentEditComponent } from './appointment-edit.component';

describe('AppointmentDetailsComponent', () => {
  const componentFactory = createComponentFactory(AppointmentEditComponent);
  let spec: Spectator<AppointmentEditComponent>;

  beforeEach(() => (spec = componentFactory()));

  it('should create', () => {
    expect(spec.component).toBeTruthy();
  });
});
