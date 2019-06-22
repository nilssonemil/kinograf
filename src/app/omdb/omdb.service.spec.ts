import { TestBed } from '@angular/core/testing';

import { OMDbService } from './omdb.service';

describe('OmdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OMDbService = TestBed.get(OMDbService);
    expect(service).toBeTruthy();
  });
});
