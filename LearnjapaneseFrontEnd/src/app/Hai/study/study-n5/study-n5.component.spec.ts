import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyN5Component } from './study-n5.component';

describe('StudyN5Component', () => {
  let component: StudyN5Component;
  let fixture: ComponentFixture<StudyN5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyN5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyN5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
