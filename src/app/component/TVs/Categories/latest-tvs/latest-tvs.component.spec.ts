import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestTvsComponent } from './latest-tvs.component';

describe('LatestTvsComponent', () => {
  let component: LatestTvsComponent;
  let fixture: ComponentFixture<LatestTvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestTvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestTvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
