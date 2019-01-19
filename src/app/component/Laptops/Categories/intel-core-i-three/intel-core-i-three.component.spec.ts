import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelCoreIThreeComponent } from './intel-core-i-three.component';

describe('IntelCoreIThreeComponent', () => {
  let component: IntelCoreIThreeComponent;
  let fixture: ComponentFixture<IntelCoreIThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntelCoreIThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntelCoreIThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
