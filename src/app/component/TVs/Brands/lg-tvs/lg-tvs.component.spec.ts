import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgTvsComponent } from './lg-tvs.component';

describe('LgTvsComponent', () => {
  let component: LgTvsComponent;
  let fixture: ComponentFixture<LgTvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgTvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgTvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
