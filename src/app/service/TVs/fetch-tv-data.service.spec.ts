import { TestBed } from '@angular/core/testing';

import { FetchTvDataService } from './fetch-tv-data.service';

describe('FetchTvDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchTvDataService = TestBed.get(FetchTvDataService);
    expect(service).toBeTruthy();
  });
});
