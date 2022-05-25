import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppointmentFacade } from '@crm/appointment/domain';
import {
  AppointmentCalendarComponent,
  AppointmentDaysComponent,
  AppointmentTimeComponent,
  PointerComponent,
} from '@crm/appointment/week/ui';
import { AppFacade } from '@crm/shared/domain';
import { PushModule } from '@rx-angular/template';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { AppointmentWeekComponent } from './appointment-week.component';

describe('AppointmentWeekComponent', () => {
  let fixture: ComponentFixture<AppointmentWeekComponent>;
  let component: AppointmentWeekComponent;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        AppointmentCalendarComponent,
        AppointmentDaysComponent,
        AppointmentTimeComponent,
        AppointmentWeekComponent,
        PointerComponent,
      ],
      imports: [ApolloTestingModule, PushModule, RouterTestingModule],
      providers: [AppFacade, AppointmentFacade],
    }).createComponent(AppointmentWeekComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
