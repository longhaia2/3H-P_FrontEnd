import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyN3Component } from './study-n3.component';

describe('StudyN3Component', () => {
  let component: StudyN3Component;
  let fixture: ComponentFixture<StudyN3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyN3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyN3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
