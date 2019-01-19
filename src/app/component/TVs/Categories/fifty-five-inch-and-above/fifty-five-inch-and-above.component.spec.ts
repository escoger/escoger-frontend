import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiftyFiveInchAndAboveComponent } from './fifty-five-inch-and-above.component';

describe('FiftyFiveInchAndAboveComponent', () => {
  let component: FiftyFiveInchAndAboveComponent;
  let fixture: ComponentFixture<FiftyFiveInchAndAboveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiftyFiveInchAndAboveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiftyFiveInchAndAboveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
