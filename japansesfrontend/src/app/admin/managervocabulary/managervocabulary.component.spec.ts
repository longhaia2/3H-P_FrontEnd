import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagervocabularyComponent } from './managervocabulary.component';

describe('ManagervocabularyComponent', () => {
  let component: ManagervocabularyComponent;
  let fixture: ComponentFixture<ManagervocabularyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagervocabularyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagervocabularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
