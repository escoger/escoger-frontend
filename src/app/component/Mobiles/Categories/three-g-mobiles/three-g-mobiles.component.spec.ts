import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeGMobilesComponent } from './three-g-mobiles.component';

describe('ThreeGMobilesComponent', () => {
  let component: ThreeGMobilesComponent;
  let fixture: ComponentFixture<ThreeGMobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeGMobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeGMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
