import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N4NguphapComponent } from './n4-nguphap.component';

describe('N4NguphapComponent', () => {
  let component: N4NguphapComponent;
  let fixture: ComponentFixture<N4NguphapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N4NguphapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N4NguphapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
