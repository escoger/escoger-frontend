import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanasonicTvsComponent } from './panasonic-tvs.component';

describe('PanasonicTvsComponent', () => {
  let component: PanasonicTvsComponent;
  let fixture: ComponentFixture<PanasonicTvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanasonicTvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanasonicTvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
