import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiTvsComponent } from './mi-tvs.component';

describe('MiTvsComponent', () => {
  let component: MiTvsComponent;
  let fixture: ComponentFixture<MiTvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiTvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiTvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
