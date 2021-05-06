import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarttestjlptComponent } from './starttestjlpt.component';

describe('StarttestjlptComponent', () => {
  let component: StarttestjlptComponent;
  let fixture: ComponentFixture<StarttestjlptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarttestjlptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarttestjlptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
