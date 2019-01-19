import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsungMobilesComponent } from './samsung-mobiles.component';

describe('SamsungMobilesComponent', () => {
  let component: SamsungMobilesComponent;
  let fixture: ComponentFixture<SamsungMobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamsungMobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamsungMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
