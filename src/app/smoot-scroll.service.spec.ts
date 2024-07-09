import { TestBed } from '@angular/core/testing';

import { SmootScrollService } from './smoot-scroll.service';

describe('SmootScrollService', () => {
  let service: SmootScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmootScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
