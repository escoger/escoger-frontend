import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonyLaptopsComponent } from './sony-laptops.component';

describe('SonyLaptopsComponent', () => {
  let component: SonyLaptopsComponent;
  let fixture: ComponentFixture<SonyLaptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonyLaptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonyLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
