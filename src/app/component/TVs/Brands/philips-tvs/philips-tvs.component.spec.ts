import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilipsTvsComponent } from './philips-tvs.component';

describe('PhilipsTvsComponent', () => {
  let component: PhilipsTvsComponent;
  let fixture: ComponentFixture<PhilipsTvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhilipsTvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhilipsTvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
