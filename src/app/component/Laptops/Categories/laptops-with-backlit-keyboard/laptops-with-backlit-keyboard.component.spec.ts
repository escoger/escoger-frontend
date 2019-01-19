import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopsWithBacklitKeyboardComponent } from './laptops-with-backlit-keyboard.component';

describe('LaptopsWithBacklitKeyboardComponent', () => {
  let component: LaptopsWithBacklitKeyboardComponent;
  let fixture: ComponentFixture<LaptopsWithBacklitKeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopsWithBacklitKeyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopsWithBacklitKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
