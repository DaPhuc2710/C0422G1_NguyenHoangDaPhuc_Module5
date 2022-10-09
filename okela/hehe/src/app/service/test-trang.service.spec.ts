import { TestBed } from '@angular/core/testing';

import { TestTrangService } from './test-trang.service';

describe('TestTrangService', () => {
  let service: TestTrangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestTrangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
