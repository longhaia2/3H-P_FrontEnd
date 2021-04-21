import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N1NguphapComponent } from './n1-nguphap.component';

describe('N1NguphapComponent', () => {
  let component: N1NguphapComponent;
  let fixture: ComponentFixture<N1NguphapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N1NguphapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N1NguphapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
