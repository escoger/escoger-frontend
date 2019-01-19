import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcerLaptopsComponent } from './acer-laptops.component';

describe('AcerLaptopsComponent', () => {
  let component: AcerLaptopsComponent;
  let fixture: ComponentFixture<AcerLaptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcerLaptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcerLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
