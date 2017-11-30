import { TestBed, inject } from '@angular/core/testing';

import { BirdServiceService } from './bird-service.service';

describe('BirdServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BirdServiceService]
    });
  });

  it('should be created', inject([BirdServiceService], (service: BirdServiceService) => {
    expect(service).toBeTruthy();
  }));
});
