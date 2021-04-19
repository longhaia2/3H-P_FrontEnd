import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarttestjnptN1Component } from './starttestjnpt-n1.component';

describe('StarttestjnptN1Component', () => {
  let component: StarttestjnptN1Component;
  let fixture: ComponentFixture<StarttestjnptN1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarttestjnptN1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarttestjnptN1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
