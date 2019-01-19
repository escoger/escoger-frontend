import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsungTvsComponent } from './samsung-tvs.component';

describe('SamsungTvsComponent', () => {
  let component: SamsungTvsComponent;
  let fixture: ComponentFixture<SamsungTvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamsungTvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamsungTvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
