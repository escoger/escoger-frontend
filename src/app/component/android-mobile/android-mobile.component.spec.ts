import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidMobileComponent } from './android-mobile.component';

describe('AndroidMobileComponent', () => {
  let component: AndroidMobileComponent;
  let fixture: ComponentFixture<AndroidMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
