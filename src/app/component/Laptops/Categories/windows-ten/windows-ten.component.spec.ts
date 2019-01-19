import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsTenComponent } from './windows-ten.component';

describe('WindowsTenComponent', () => {
  let component: WindowsTenComponent;
  let fixture: ComponentFixture<WindowsTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowsTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowsTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
