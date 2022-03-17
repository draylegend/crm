import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { AppointmentPreviewComponent } from './appointment-preview.component';

describe('AppointmentComponent', () => {
  const componentFactory = createComponentFactory(AppointmentPreviewComponent);
  let spec: Spectator<AppointmentPreviewComponent>;

  beforeAll(() => (spec = componentFactory()));

  it('should create', () => {
    expect(spec.component).toBeTruthy();
  });
});
