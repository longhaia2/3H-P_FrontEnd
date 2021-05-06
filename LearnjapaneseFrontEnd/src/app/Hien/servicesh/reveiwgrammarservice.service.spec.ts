import { TestBed } from '@angular/core/testing';

import { ReveiwgrammarserviceService } from './reveiwgrammarservice.service';

describe('ReveiwgrammarserviceService', () => {
  let service: ReveiwgrammarserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReveiwgrammarserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
