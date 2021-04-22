import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N5NguphapComponent } from './n5-nguphap.component';

describe('N5NguphapComponent', () => {
  let component: N5NguphapComponent;
  let fixture: ComponentFixture<N5NguphapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N5NguphapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N5NguphapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
