import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FortyKToFiftyKComponent } from './forty-k-to-fifty-k.component';

describe('FortyKToFiftyKComponent', () => {
  let component: FortyKToFiftyKComponent;
  let fixture: ComponentFixture<FortyKToFiftyKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FortyKToFiftyKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FortyKToFiftyKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
