import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleLaptopsComponent } from './apple-laptops.component';

describe('AppleLaptopsComponent', () => {
  let component: AppleLaptopsComponent;
  let fixture: ComponentFixture<AppleLaptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppleLaptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
