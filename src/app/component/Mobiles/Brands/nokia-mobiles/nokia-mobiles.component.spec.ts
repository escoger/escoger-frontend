import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NokiaMobilesComponent } from './nokia-mobiles.component';

describe('NokiaMobilesComponent', () => {
  let component: NokiaMobilesComponent;
  let fixture: ComponentFixture<NokiaMobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NokiaMobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NokiaMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
