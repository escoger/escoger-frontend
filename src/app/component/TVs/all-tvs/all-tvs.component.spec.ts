import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTvsComponent } from './all-tvs.component';

describe('AllTvsComponent', () => {
  let component: AllTvsComponent;
  let fixture: ComponentFixture<AllTvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
