import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestMobilesComponent } from './latest-mobiles.component';

describe('LatestMobilesComponent', () => {
  let component: LatestMobilesComponent;
  let fixture: ComponentFixture<LatestMobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestMobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
