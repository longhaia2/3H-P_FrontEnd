import { TestBed } from '@angular/core/testing';

import { ReviewgrammarService } from './reviewgrammar.service';

describe('ReviewgrammarService', () => {
  let service: ReviewgrammarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewgrammarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
