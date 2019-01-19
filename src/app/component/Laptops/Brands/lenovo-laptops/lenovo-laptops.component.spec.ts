import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenovoLaptopsComponent } from './lenovo-laptops.component';

describe('LenovoLaptopsComponent', () => {
  let component: LenovoLaptopsComponent;
  let fixture: ComponentFixture<LenovoLaptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenovoLaptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenovoLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
