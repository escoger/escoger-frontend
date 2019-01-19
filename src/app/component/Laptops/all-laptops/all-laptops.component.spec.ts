import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLaptopsComponent } from './all-laptops.component';

describe('AllLaptopsComponent', () => {
  let component: AllLaptopsComponent;
  let fixture: ComponentFixture<AllLaptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLaptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
