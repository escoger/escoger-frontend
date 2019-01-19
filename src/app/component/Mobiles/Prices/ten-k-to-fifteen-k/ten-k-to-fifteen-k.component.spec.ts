import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenKToFifteenKComponent } from './ten-k-to-fifteen-k.component';

describe('TenKToFifteenKComponent', () => {
  let component: TenKToFifteenKComponent;
  let fixture: ComponentFixture<TenKToFifteenKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenKToFifteenKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenKToFifteenKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
