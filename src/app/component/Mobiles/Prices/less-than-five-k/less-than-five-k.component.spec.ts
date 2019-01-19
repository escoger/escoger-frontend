import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessThanFiveKComponent } from './less-than-five-k.component';

describe('LessThanFiveKComponent', () => {
  let component: LessThanFiveKComponent;
  let fixture: ComponentFixture<LessThanFiveKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessThanFiveKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessThanFiveKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
