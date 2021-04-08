import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyN2Component } from './study-n2.component';

describe('StudyN2Component', () => {
  let component: StudyN2Component;
  let fixture: ComponentFixture<StudyN2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyN2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyN2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
