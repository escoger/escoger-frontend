import { TestBed } from '@angular/core/testing';

import { FetchLaptopDataService } from './fetch-laptop-data.service';

describe('FetchLaptopDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchLaptopDataService = TestBed.get(FetchLaptopDataService);
    expect(service).toBeTruthy();
  });
});
