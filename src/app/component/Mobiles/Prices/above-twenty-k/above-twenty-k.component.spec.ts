import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboveTwentyKComponent } from './above-twenty-k.component';

describe('AboveTwentyKComponent', () => {
  let component: AboveTwentyKComponent;
  let fixture: ComponentFixture<AboveTwentyKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboveTwentyKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboveTwentyKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
