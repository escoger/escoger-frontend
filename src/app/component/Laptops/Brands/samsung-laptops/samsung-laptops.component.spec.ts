import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsungLaptopsComponent } from './samsung-laptops.component';

describe('SamsungLaptopsComponent', () => {
  let component: SamsungLaptopsComponent;
  let fixture: ComponentFixture<SamsungLaptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamsungLaptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamsungLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
