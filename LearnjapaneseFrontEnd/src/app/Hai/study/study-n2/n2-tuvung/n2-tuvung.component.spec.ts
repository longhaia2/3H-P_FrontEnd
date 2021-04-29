import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N2TuvungComponent } from './n2-tuvung.component';

describe('N2TuvungComponent', () => {
  let component: N2TuvungComponent;
  let fixture: ComponentFixture<N2TuvungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N2TuvungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N2TuvungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
