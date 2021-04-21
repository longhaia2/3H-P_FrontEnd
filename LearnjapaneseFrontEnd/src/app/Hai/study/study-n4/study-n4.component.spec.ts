import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyN4Component } from './study-n4.component';

describe('StudyN4Component', () => {
  let component: StudyN4Component;
  let fixture: ComponentFixture<StudyN4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyN4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyN4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
