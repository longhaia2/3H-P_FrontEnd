import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N4TuvungOntapComponent } from './n4-tuvung-ontap.component';

describe('N4TuvungOntapComponent', () => {
  let component: N4TuvungOntapComponent;
  let fixture: ComponentFixture<N4TuvungOntapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N4TuvungOntapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N4TuvungOntapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
