import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularMobilesComponent } from './most-popular-mobiles.component';

describe('MostPopularMobilesComponent', () => {
  let component: MostPopularMobilesComponent;
  let fixture: ComponentFixture<MostPopularMobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostPopularMobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPopularMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
