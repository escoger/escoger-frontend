import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VivoMobilesComponent } from './vivo-mobiles.component';

describe('VivoMobilesComponent', () => {
  let component: VivoMobilesComponent;
  let fixture: ComponentFixture<VivoMobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VivoMobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VivoMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
