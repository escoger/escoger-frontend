import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoconTvsComponent } from './videocon-tvs.component';

describe('VideoconTvsComponent', () => {
  let component: VideoconTvsComponent;
  let fixture: ComponentFixture<VideoconTvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoconTvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoconTvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
