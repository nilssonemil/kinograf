import { TestBed } from '@angular/core/testing';

import { IMDbService } from './imdb.service';

describe('ImdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IMDbService = TestBed.get(IMDbService);
    expect(service).toBeTruthy();
  });
});
