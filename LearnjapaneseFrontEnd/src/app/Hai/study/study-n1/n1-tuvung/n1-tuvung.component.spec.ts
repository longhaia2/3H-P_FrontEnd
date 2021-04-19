import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N1TuvungComponent } from './n1-tuvung.component';

describe('N1TuvungComponent', () => {
  let component: N1TuvungComponent;
  let fixture: ComponentFixture<N1TuvungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N1TuvungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N1TuvungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
