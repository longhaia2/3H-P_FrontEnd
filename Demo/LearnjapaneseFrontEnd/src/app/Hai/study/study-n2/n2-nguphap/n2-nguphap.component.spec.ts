import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N2NguphapComponent } from './n2-nguphap.component';

describe('N2NguphapComponent', () => {
  let component: N2NguphapComponent;
  let fixture: ComponentFixture<N2NguphapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N2NguphapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N2NguphapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
