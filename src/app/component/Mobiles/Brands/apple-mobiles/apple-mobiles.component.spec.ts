import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleMobilesComponent } from './apple-mobiles.component';

describe('AppleMobilesComponent', () => {
  let component: AppleMobilesComponent;
  let fixture: ComponentFixture<AppleMobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppleMobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
