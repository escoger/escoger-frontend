import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveKToTenKComponent } from './five-k-to-ten-k.component';

describe('FiveKToTenKComponent', () => {
  let component: FiveKToTenKComponent;
  let fixture: ComponentFixture<FiveKToTenKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveKToTenKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveKToTenKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
