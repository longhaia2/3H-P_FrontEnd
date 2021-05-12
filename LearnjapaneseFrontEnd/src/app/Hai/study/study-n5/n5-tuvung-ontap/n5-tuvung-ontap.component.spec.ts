import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N5TuvungOntapComponent } from './n5-tuvung-ontap.component';

describe('N5TuvungOntapComponent', () => {
  let component: N5TuvungOntapComponent;
  let fixture: ComponentFixture<N5TuvungOntapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N5TuvungOntapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N5TuvungOntapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
