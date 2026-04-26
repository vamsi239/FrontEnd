import { TestBed } from '@angular/core/testing';

import { Aboutservice } from './aboutservice';

describe('Aboutservice', () => {
  let service: Aboutservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Aboutservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
