import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestLaptopsComponent } from './latest-laptops.component';

describe('LatestLaptopsComponent', () => {
  let component: LatestLaptopsComponent;
  let fixture: ComponentFixture<LatestLaptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestLaptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
