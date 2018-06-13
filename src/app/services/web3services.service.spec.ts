import { TestBed, inject } from '@angular/core/testing';

import { Web3servicesService } from './web3services.service';

describe('Web3servicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Web3servicesService]
    });
  });

  it('should be created', inject([Web3servicesService], (service: Web3servicesService) => {
    expect(service).toBeTruthy();
  }));
});
