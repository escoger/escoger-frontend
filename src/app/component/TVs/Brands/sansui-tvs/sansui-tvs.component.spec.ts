import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SansuiTvsComponent } from './sansui-tvs.component';

describe('SansuiTvsComponent', () => {
  let component: SansuiTvsComponent;
  let fixture: ComponentFixture<SansuiTvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SansuiTvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SansuiTvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
