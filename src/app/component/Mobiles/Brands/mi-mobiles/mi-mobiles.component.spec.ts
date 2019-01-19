import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiMobilesComponent } from './mi-mobiles.component';

describe('MiMobilesComponent', () => {
  let component: MiMobilesComponent;
  let fixture: ComponentFixture<MiMobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiMobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
