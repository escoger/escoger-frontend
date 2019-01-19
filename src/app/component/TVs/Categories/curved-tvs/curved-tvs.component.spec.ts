import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurvedTvsComponent } from './curved-tvs.component';

describe('CurvedTvsComponent', () => {
  let component: CurvedTvsComponent;
  let fixture: ComponentFixture<CurvedTvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurvedTvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurvedTvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
