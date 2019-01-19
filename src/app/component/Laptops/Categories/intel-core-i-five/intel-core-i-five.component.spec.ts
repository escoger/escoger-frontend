import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelCoreIFiveComponent } from './intel-core-i-five.component';

describe('IntelCoreIFiveComponent', () => {
  let component: IntelCoreIFiveComponent;
  let fixture: ComponentFixture<IntelCoreIFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntelCoreIFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntelCoreIFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
