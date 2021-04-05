import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosevocabularyComponent } from './choosevocabulary.component';

describe('ChoosevocabularyComponent', () => {
  let component: ChoosevocabularyComponent;
  let fixture: ComponentFixture<ChoosevocabularyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosevocabularyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosevocabularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
