import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQuestionByExamComponent } from './list-question-by-exam.component';

describe('ListQuestionByExamComponent', () => {
  let component: ListQuestionByExamComponent;
  let fixture: ComponentFixture<ListQuestionByExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListQuestionByExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListQuestionByExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
