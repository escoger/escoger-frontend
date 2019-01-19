import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonyTvsComponent } from './sony-tvs.component';

describe('SonyTvsComponent', () => {
  let component: SonyTvsComponent;
  let fixture: ComponentFixture<SonyTvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonyTvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonyTvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
