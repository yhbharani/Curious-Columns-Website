import { TestBed } from '@angular/core/testing';

import { SProfileService } from './s-profile.service';

describe('SProfileService', () => {
  let service: SProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
