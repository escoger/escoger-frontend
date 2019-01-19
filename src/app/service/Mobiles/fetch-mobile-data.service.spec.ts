import { TestBed } from '@angular/core/testing';

import { FetchMobileDataService } from './fetch-mobile-data.service';

describe('FetchMobileDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchMobileDataService = TestBed.get(FetchMobileDataService);
    expect(service).toBeTruthy();
  });
});
