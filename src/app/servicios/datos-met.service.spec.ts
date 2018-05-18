import { TestBed, inject } from '@angular/core/testing';

import { DatosMetService } from './datos-met.service';

describe('DatosMetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatosMetService]
    });
  });

  it('should be created', inject([DatosMetService], (service: DatosMetService) => {
    expect(service).toBeTruthy();
  }));
});
