import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N4TuvungComponent } from './n4-tuvung.component';

describe('N4TuvungComponent', () => {
  let component: N4TuvungComponent;
  let fixture: ComponentFixture<N4TuvungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N4TuvungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N4TuvungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
