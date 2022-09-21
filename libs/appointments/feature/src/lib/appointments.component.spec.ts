import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppointmentsComponent } from './appointments.component';

describe('AppointmentsFeatureComponent', () => {
  let fixture: ComponentFixture<AppointmentsComponent>;
  let component: AppointmentsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppointmentsComponent],
    });

    fixture = TestBed.createComponent(AppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
