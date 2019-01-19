import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DellLaptopsComponent } from './dell-laptops.component';

describe('DellLaptopsComponent', () => {
  let component: DellLaptopsComponent;
  let fixture: ComponentFixture<DellLaptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DellLaptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DellLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
