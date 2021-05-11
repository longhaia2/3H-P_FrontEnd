import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N1NguphapOntapComponent } from './n1-nguphap-ontap.component';

describe('N1NguphapOntapComponent', () => {
  let component: N1NguphapOntapComponent;
  let fixture: ComponentFixture<N1NguphapOntapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N1NguphapOntapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N1NguphapOntapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
