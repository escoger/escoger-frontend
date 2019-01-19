import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HonorMobilesComponent } from './honor-mobiles.component';

describe('HonorMobilesComponent', () => {
  let component: HonorMobilesComponent;
  let fixture: ComponentFixture<HonorMobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HonorMobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HonorMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
