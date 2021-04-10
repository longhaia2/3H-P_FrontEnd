import { TestBed } from '@angular/core/testing';

import { TuvungService } from './tuvung.service';

describe('TuvungService', () => {
  let service: TuvungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuvungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
