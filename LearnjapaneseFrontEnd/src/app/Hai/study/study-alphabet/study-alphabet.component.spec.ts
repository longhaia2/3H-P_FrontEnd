import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyAlphabetComponent } from './study-alphabet.component';

describe('StudyAlphabetComponent', () => {
  let component: StudyAlphabetComponent;
  let fixture: ComponentFixture<StudyAlphabetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyAlphabetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyAlphabetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
