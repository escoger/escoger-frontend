import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicromaxTvsComponent } from './micromax-tvs.component';

describe('MicromaxTvsComponent', () => {
  let component: MicromaxTvsComponent;
  let fixture: ComponentFixture<MicromaxTvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicromaxTvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicromaxTvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
