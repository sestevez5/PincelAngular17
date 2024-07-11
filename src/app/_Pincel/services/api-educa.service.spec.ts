import { TestBed } from '@angular/core/testing';

import { ApiEducaService } from './api-educa.service';

describe('ApiEducaService', () => {
  let service: ApiEducaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEducaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
