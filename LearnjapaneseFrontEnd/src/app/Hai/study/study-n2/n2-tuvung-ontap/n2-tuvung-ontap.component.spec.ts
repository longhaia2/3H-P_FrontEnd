import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N2TuvungOntapComponent } from './n2-tuvung-ontap.component';

describe('N2TuvungOntapComponent', () => {
  let component: N2TuvungOntapComponent;
  let fixture: ComponentFixture<N2TuvungOntapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N2TuvungOntapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N2TuvungOntapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
