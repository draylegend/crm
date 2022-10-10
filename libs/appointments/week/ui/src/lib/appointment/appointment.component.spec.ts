import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppointmentComponent } from './appointment.component';

describe('AppointmentComponent', () => {
  let fixture: ComponentFixture<AppointmentComponent>;
  let component: AppointmentComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppointmentComponent],
    });

    fixture = TestBed.createComponent(AppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
