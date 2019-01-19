import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DualSimMobilesComponent } from './dual-sim-mobiles.component';

describe('DualSimMobilesComponent', () => {
  let component: DualSimMobilesComponent;
  let fixture: ComponentFixture<DualSimMobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DualSimMobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DualSimMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
