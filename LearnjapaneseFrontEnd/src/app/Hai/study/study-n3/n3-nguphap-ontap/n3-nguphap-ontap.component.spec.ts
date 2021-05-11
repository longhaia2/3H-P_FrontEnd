import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N3NguphapOntapComponent } from './n3-nguphap-ontap.component';

describe('N3NguphapOntapComponent', () => {
  let component: N3NguphapOntapComponent;
  let fixture: ComponentFixture<N3NguphapOntapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N3NguphapOntapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N3NguphapOntapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
