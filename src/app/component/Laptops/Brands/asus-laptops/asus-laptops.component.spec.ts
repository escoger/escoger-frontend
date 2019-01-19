import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsusLaptopsComponent } from './asus-laptops.component';

describe('AsusLaptopsComponent', () => {
  let component: AsusLaptopsComponent;
  let fixture: ComponentFixture<AsusLaptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsusLaptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsusLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
