import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N5NguphapOntapComponent } from './n5-nguphap-ontap.component';

describe('N5NguphapOntapComponent', () => {
  let component: N5NguphapOntapComponent;
  let fixture: ComponentFixture<N5NguphapOntapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N5NguphapOntapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N5NguphapOntapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
