import { TestBed } from '@angular/core/testing';

import { PageInfo } from './page-info';

describe('PageInfo', () => {
  let service: PageInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageInfo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
