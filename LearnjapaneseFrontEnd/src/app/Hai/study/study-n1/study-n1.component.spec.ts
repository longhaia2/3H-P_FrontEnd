import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyN1Component } from './study-n1.component';

describe('StudyN1Component', () => {
  let component: StudyN1Component;
  let fixture: ComponentFixture<StudyN1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyN1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyN1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
