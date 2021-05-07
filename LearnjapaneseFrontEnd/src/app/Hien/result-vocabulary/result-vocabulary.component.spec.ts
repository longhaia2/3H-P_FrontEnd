import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultVocabularyComponent } from './result-vocabulary.component';

describe('ResultVocabularyComponent', () => {
  let component: ResultVocabularyComponent;
  let fixture: ComponentFixture<ResultVocabularyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultVocabularyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultVocabularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
