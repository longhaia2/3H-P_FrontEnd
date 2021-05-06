import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N1TuvungOntapComponent } from './n1-tuvung-ontap.component';

describe('N1TuvungOntapComponent', () => {
  let component: N1TuvungOntapComponent;
  let fixture: ComponentFixture<N1TuvungOntapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N1TuvungOntapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N1TuvungOntapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
