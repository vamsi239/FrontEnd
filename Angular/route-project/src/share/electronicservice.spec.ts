import { TestBed } from '@angular/core/testing';

import { Electronicservice } from './electronicservice';

describe('Electronicservice', () => {
  let service: Electronicservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Electronicservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
