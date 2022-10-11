import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoursComponent } from './hours.component';

describe('HoursComponent', () => {
  let fixture: ComponentFixture<HoursComponent>;
  let component: HoursComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HoursComponent],
    });

    fixture = TestBed.createComponent(HoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
