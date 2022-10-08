import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppointmentsWeekFeatureComponent } from './appointments-week-feature.component';

describe('AppointmentsWeekFeatureComponent', () => {
  let fixture: ComponentFixture<AppointmentsWeekFeatureComponent>;
  let component: AppointmentsWeekFeatureComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppointmentsWeekFeatureComponent],
    });

    fixture = TestBed.createComponent(AppointmentsWeekFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
