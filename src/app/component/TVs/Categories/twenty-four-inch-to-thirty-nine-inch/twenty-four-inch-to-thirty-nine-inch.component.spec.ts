import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyFourInchToThirtyNineInchComponent } from './twenty-four-inch-to-thirty-nine-inch.component';

describe('TwentyFourInchToThirtyNineInchComponent', () => {
  let component: TwentyFourInchToThirtyNineInchComponent;
  let fixture: ComponentFixture<TwentyFourInchToThirtyNineInchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwentyFourInchToThirtyNineInchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentyFourInchToThirtyNineInchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
