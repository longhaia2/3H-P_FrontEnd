import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N2NguphapOntapComponent } from './n2-nguphap-ontap.component';

describe('N2NguphapOntapComponent', () => {
  let component: N2NguphapOntapComponent;
  let fixture: ComponentFixture<N2NguphapOntapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N2NguphapOntapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N2NguphapOntapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
