import { TestBed } from '@angular/core/testing';

import { ReviewvocabularyService } from './reviewvocabulary.service';

describe('ReviewvocabularyService', () => {
  let service: ReviewvocabularyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewvocabularyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
