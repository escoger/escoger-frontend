import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifteenKToTwentyKComponent } from './fifteen-k-to-twenty-k.component';

describe('FifteenKToTwentyKComponent', () => {
  let component: FifteenKToTwentyKComponent;
  let fixture: ComponentFixture<FifteenKToTwentyKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifteenKToTwentyKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifteenKToTwentyKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
