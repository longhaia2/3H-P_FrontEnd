import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N3NguphapComponent } from './n3-nguphap.component';

describe('N3NguphapComponent', () => {
  let component: N3NguphapComponent;
  let fixture: ComponentFixture<N3NguphapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N3NguphapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N3NguphapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
