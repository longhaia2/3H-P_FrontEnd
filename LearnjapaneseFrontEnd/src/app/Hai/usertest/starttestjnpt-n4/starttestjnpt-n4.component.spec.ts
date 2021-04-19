import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarttestjnptN4Component } from './starttestjnpt-n4.component';

describe('StarttestjnptN4Component', () => {
  let component: StarttestjnptN4Component;
  let fixture: ComponentFixture<StarttestjnptN4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarttestjnptN4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarttestjnptN4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
