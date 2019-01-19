import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosoftLaptopsComponent } from './microsoft-laptops.component';

describe('MicrosoftLaptopsComponent', () => {
  let component: MicrosoftLaptopsComponent;
  let fixture: ComponentFixture<MicrosoftLaptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrosoftLaptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrosoftLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
