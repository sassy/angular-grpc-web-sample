import { TestBed } from '@angular/core/testing';

import { GrpcserviceService } from './grpcservice.service';

describe('GrpcserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrpcserviceService = TestBed.get(GrpcserviceService);
    expect(service).toBeTruthy();
  });
});
