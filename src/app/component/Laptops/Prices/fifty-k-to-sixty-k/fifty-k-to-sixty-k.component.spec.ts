import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiftyKToSixtyKComponent } from './fifty-k-to-sixty-k.component';

describe('FiftyKToSixtyKComponent', () => {
  let component: FiftyKToSixtyKComponent;
  let fixture: ComponentFixture<FiftyKToSixtyKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiftyKToSixtyKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiftyKToSixtyKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
