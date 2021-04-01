import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengetogetgerComponent } from './challengetogetger.component';

describe('ChallengetogetgerComponent', () => {
  let component: ChallengetogetgerComponent;
  let fixture: ComponentFixture<ChallengetogetgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengetogetgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengetogetgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
