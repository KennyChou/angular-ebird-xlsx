import { TestBed } from '@angular/core/testing';

import { EbirdApiService } from './ebird-api.service';

describe('EbirdApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EbirdApiService = TestBed.get(EbirdApiService);
    expect(service).toBeTruthy();
  });
});
