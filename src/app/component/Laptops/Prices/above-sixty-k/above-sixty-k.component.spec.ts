import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboveSixtyKComponent } from './above-sixty-k.component';

describe('AboveSixtyKComponent', () => {
  let component: AboveSixtyKComponent;
  let fixture: ComponentFixture<AboveSixtyKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboveSixtyKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboveSixtyKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
