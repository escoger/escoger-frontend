import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatorComponent } from './affiliator.component';

describe('AffiliatorComponent', () => {
  let component: AffiliatorComponent;
  let fixture: ComponentFixture<AffiliatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
