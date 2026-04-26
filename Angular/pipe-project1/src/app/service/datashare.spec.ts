import { TestBed } from '@angular/core/testing';

import { Datashare } from './datashare';

describe('Datashare', () => {
  let service: Datashare;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Datashare);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
