import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UptoTwentyThreeInchComponent } from './upto-twenty-three-inch.component';

describe('UptoTwentyThreeInchComponent', () => {
  let component: UptoTwentyThreeInchComponent;
  let fixture: ComponentFixture<UptoTwentyThreeInchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UptoTwentyThreeInchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UptoTwentyThreeInchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
