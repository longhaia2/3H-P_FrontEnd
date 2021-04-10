import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarchallengeComponent } from './sidebarchallenge.component';

describe('SidebarchallengeComponent', () => {
  let component: SidebarchallengeComponent;
  let fixture: ComponentFixture<SidebarchallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarchallengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarchallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
