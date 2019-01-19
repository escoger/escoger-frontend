import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToshibaLaptopsComponent } from './toshiba-laptops.component';

describe('ToshibaLaptopsComponent', () => {
  let component: ToshibaLaptopsComponent;
  let fixture: ComponentFixture<ToshibaLaptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToshibaLaptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToshibaLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
