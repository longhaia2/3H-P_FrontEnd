import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewgrammarComponent } from './reviewgrammar.component';

describe('ReviewgrammarComponent', () => {
  let component: ReviewgrammarComponent;
  let fixture: ComponentFixture<ReviewgrammarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewgrammarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewgrammarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
