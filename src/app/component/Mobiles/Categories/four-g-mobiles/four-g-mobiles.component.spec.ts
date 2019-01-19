import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourGMobilesComponent } from './four-g-mobiles.component';

describe('FourGMobilesComponent', () => {
  let component: FourGMobilesComponent;
  let fixture: ComponentFixture<FourGMobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourGMobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourGMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
