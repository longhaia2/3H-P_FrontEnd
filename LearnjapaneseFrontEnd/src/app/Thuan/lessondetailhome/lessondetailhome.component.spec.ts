import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessondetailhomeComponent } from './lessondetailhome.component';

describe('LessondetailhomeComponent', () => {
  let component: LessondetailhomeComponent;
  let fixture: ComponentFixture<LessondetailhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessondetailhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessondetailhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
