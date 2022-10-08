import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonIconComponent } from './button-icon.component';

describe('ButtonIconComponent', () => {
  let fixture: ComponentFixture<ButtonIconComponent>;
  let component: ButtonIconComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonIconComponent],
    });

    fixture = TestBed.createComponent(ButtonIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
