import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfiePhonesComponent } from './selfie-phones.component';

describe('SelfiePhonesComponent', () => {
  let component: SelfiePhonesComponent;
  let fixture: ComponentFixture<SelfiePhonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfiePhonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfiePhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
