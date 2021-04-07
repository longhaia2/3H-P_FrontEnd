import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewvocabularyComponent } from './reviewvocabulary.component';

describe('ReviewvocabularyComponent', () => {
  let component: ReviewvocabularyComponent;
  let fixture: ComponentFixture<ReviewvocabularyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewvocabularyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewvocabularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
