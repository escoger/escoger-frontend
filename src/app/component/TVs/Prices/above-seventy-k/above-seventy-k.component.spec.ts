import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboveSeventyKComponent } from './above-seventy-k.component';

describe('AboveSeventyKComponent', () => {
  let component: AboveSeventyKComponent;
  let fixture: ComponentFixture<AboveSeventyKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboveSeventyKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboveSeventyKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
