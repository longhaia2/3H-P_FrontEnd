import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N3TuvungOntapComponent } from './n3-tuvung-ontap.component';

describe('N3TuvungOntapComponent', () => {
  let component: N3TuvungOntapComponent;
  let fixture: ComponentFixture<N3TuvungOntapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N3TuvungOntapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N3TuvungOntapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
