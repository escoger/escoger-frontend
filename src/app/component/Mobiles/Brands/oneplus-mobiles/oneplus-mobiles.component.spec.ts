import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneplusMobilesComponent } from './oneplus-mobiles.component';

describe('OneplusMobilesComponent', () => {
  let component: OneplusMobilesComponent;
  let fixture: ComponentFixture<OneplusMobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneplusMobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneplusMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
