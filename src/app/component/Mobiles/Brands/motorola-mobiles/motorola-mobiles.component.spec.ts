import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorolaMobilesComponent } from './motorola-mobiles.component';

describe('MotorolaMobilesComponent', () => {
  let component: MotorolaMobilesComponent;
  let fixture: ComponentFixture<MotorolaMobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorolaMobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorolaMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
