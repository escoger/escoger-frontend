import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelCoreISevenComponent } from './intel-core-i-seven.component';

describe('IntelCoreISevenComponent', () => {
  let component: IntelCoreISevenComponent;
  let fixture: ComponentFixture<IntelCoreISevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntelCoreISevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntelCoreISevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
