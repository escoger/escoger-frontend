import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDTvsComponent } from './three-d-tvs.component';

describe('ThreeDTvsComponent', () => {
  let component: ThreeDTvsComponent;
  let fixture: ComponentFixture<ThreeDTvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDTvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDTvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
