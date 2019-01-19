import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirtyKToFortyKComponent } from './thirty-k-to-forty-k.component';

describe('ThirtyKToFortyKComponent', () => {
  let component: ThirtyKToFortyKComponent;
  let fixture: ComponentFixture<ThirtyKToFortyKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirtyKToFortyKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirtyKToFortyKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
