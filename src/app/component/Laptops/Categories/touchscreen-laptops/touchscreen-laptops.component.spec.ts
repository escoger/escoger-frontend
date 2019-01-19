import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchscreenLaptopsComponent } from './touchscreen-laptops.component';

describe('TouchscreenLaptopsComponent', () => {
  let component: TouchscreenLaptopsComponent;
  let fixture: ComponentFixture<TouchscreenLaptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchscreenLaptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchscreenLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
