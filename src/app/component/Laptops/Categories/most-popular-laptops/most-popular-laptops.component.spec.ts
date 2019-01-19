import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularLaptopsComponent } from './most-popular-laptops.component';

describe('MostPopularLaptopsComponent', () => {
  let component: MostPopularLaptopsComponent;
  let fixture: ComponentFixture<MostPopularLaptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostPopularLaptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPopularLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
