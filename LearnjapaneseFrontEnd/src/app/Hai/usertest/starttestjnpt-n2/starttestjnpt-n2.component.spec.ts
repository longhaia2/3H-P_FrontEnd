import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarttestjnptN2Component } from './starttestjnpt-n2.component';

describe('StarttestjnptN2Component', () => {
  let component: StarttestjnptN2Component;
  let fixture: ComponentFixture<StarttestjnptN2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarttestjnptN2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarttestjnptN2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
