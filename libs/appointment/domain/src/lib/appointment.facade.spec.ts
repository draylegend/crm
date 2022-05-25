import { AppFacade } from '@crm/shared/domain';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { AppointmentFacade } from './appointment.facade';

describe('AppointmentFacade', () => {
  const serviceFactory = createServiceFactory({
    service: AppointmentFacade,
    imports: [ApolloTestingModule],
    providers: [AppFacade],
  });
  let spec: SpectatorService<AppointmentFacade>;

  beforeEach(() => (spec = serviceFactory()));

  it('should create', () => {
    expect(spec.service).toBeTruthy();
  });
});
