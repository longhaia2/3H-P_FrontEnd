import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarttestjnptN3Component } from './starttestjnpt-n3.component';

describe('StarttestjnptN3Component', () => {
  let component: StarttestjnptN3Component;
  let fixture: ComponentFixture<StarttestjnptN3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarttestjnptN3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarttestjnptN3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
