import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullHdResolutionComponent } from './full-hd-resolution.component';

describe('FullHdResolutionComponent', () => {
  let component: FullHdResolutionComponent;
  let fixture: ComponentFixture<FullHdResolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullHdResolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullHdResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
