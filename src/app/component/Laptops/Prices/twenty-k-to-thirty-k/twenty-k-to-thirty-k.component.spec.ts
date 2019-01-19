import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyKToThirtyKComponent } from './twenty-k-to-thirty-k.component';

describe('TwentyKToThirtyKComponent', () => {
  let component: TwentyKToThirtyKComponent;
  let fixture: ComponentFixture<TwentyKToThirtyKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwentyKToThirtyKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentyKToThirtyKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
