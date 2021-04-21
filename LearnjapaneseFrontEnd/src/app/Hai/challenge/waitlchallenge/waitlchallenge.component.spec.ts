import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitlchallengeComponent } from './waitlchallenge.component';

describe('WaitlchallengeComponent', () => {
  let component: WaitlchallengeComponent;
  let fixture: ComponentFixture<WaitlchallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitlchallengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitlchallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
