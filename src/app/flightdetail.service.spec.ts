import { TestBed, inject } from '@angular/core/testing';

import { FlightdetailService } from './flightdetail.service';

describe('FlightdetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightdetailService]
    });
  });

  it('should be created', inject([FlightdetailService], (service: FlightdetailService) => {
    expect(service).toBeTruthy();
  }));
});
