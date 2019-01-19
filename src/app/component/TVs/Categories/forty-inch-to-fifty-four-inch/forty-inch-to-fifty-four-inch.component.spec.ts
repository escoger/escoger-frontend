import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FortyInchToFiftyFourInchComponent } from './forty-inch-to-fifty-four-inch.component';

describe('FortyInchToFiftyFourInchComponent', () => {
  let component: FortyInchToFiftyFourInchComponent;
  let fixture: ComponentFixture<FortyInchToFiftyFourInchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FortyInchToFiftyFourInchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FortyInchToFiftyFourInchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
