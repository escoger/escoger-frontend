import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpLaptopsComponent } from './hp-laptops.component';

describe('HpLaptopsComponent', () => {
  let component: HpLaptopsComponent;
  let fixture: ComponentFixture<HpLaptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpLaptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
