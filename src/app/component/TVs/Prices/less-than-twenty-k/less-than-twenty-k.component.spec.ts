import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessThanTwentyKComponent } from './less-than-twenty-k.component';

describe('LessThanTwentyKComponent', () => {
  let component: LessThanTwentyKComponent;
  let fixture: ComponentFixture<LessThanTwentyKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessThanTwentyKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessThanTwentyKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
