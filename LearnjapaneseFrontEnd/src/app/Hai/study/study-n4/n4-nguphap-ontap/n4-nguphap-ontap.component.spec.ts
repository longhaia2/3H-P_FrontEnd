import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N4NguphapOntapComponent } from './n4-nguphap-ontap.component';

describe('N4NguphapOntapComponent', () => {
  let component: N4NguphapOntapComponent;
  let fixture: ComponentFixture<N4NguphapOntapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N4NguphapOntapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N4NguphapOntapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
