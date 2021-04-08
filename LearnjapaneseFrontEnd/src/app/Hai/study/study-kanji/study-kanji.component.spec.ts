import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyKanjiComponent } from './study-kanji.component';

describe('StudyKanjiComponent', () => {
  let component: StudyKanjiComponent;
  let fixture: ComponentFixture<StudyKanjiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyKanjiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyKanjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
