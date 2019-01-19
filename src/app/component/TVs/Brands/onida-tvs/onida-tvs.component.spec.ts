import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnidaTvsComponent } from './onida-tvs.component';

describe('OnidaTvsComponent', () => {
  let component: OnidaTvsComponent;
  let fixture: ComponentFixture<OnidaTvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnidaTvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnidaTvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
