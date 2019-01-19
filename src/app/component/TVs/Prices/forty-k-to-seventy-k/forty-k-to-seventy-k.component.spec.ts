import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FortyKToSeventyKComponent } from './forty-k-to-seventy-k.component';

describe('FortyKToSeventyKComponent', () => {
  let component: FortyKToSeventyKComponent;
  let fixture: ComponentFixture<FortyKToSeventyKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FortyKToSeventyKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FortyKToSeventyKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
