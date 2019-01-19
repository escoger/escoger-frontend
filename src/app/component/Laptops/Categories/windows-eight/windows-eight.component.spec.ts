import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsEightComponent } from './windows-eight.component';

describe('WindowsEightComponent', () => {
  let component: WindowsEightComponent;
  let fixture: ComponentFixture<WindowsEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowsEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowsEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
