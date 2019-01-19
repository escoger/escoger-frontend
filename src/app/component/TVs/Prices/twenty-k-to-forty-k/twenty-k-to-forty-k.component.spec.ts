import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyKToFortyKComponent } from './twenty-k-to-forty-k.component';

describe('TwentyKToFortyKComponent', () => {
  let component: TwentyKToFortyKComponent;
  let fixture: ComponentFixture<TwentyKToFortyKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwentyKToFortyKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentyKToFortyKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
