import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTvsComponent } from './smart-tvs.component';

describe('SmartTvsComponent', () => {
  let component: SmartTvsComponent;
  let fixture: ComponentFixture<SmartTvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartTvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
