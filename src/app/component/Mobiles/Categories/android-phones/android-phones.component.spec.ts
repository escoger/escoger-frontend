import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidPhonesComponent } from './android-phones.component';

describe('AndroidPhonesComponent', () => {
  let component: AndroidPhonesComponent;
  let fixture: ComponentFixture<AndroidPhonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidPhonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
