import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { AppointmentFacade } from './appointment.facade';

describe('AppointmentFacade', () => {
  const serviceFactory = createServiceFactory(AppointmentFacade);
  let spec: SpectatorService<AppointmentFacade>;

  beforeEach(() => (spec = serviceFactory()));

  it('should create', () => {
    expect(spec.service).toBeTruthy();
  });
});
