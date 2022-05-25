import { AppFacade } from '@crm/shared/domain';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { PushModule } from '@rx-angular/template';
import { AppointmentCalendarComponent } from './appointment-calendar.component';

describe('AppointmentCalendarComponent', () => {
  const componentFactory = createComponentFactory({
    component: AppointmentCalendarComponent,
    imports: [PushModule],
    providers: [AppFacade],
  });
  let spec: Spectator<AppointmentCalendarComponent>;

  beforeEach(() => (spec = componentFactory()));

  it('should create', () => {
    expect(spec.component).toBeTruthy();
  });
});
