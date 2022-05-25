import { RouterTestingModule } from '@angular/router/testing';
import { AppointmentFacade } from '@crm/appointment/domain';
import { AppFacade } from '@crm/shared/domain';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { PushModule } from '@rx-angular/template';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { AppointmentEditComponent } from './appointment-edit.component';

describe('AppointmentDetailsComponent', () => {
  const componentFactory = createComponentFactory({
    component: AppointmentEditComponent,
    imports: [ApolloTestingModule, PushModule, RouterTestingModule],
    providers: [AppFacade, AppointmentFacade],
  });
  let spec: Spectator<AppointmentEditComponent>;

  beforeEach(() => (spec = componentFactory()));

  it('should create', () => {
    expect(spec.component).toBeTruthy();
  });
});
