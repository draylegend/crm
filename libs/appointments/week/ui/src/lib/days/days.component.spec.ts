import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DaysComponent } from './days.component';

describe('DaysComponent', () => {
  let fixture: ComponentFixture<DaysComponent>;
  let component: DaysComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DaysComponent],
    });

    fixture = TestBed.createComponent(DaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
