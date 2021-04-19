import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N4tuvungComponent } from './n4tuvung.component';

describe('N4tuvungComponent', () => {
  let component: N4tuvungComponent;
  let fixture: ComponentFixture<N4tuvungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N4tuvungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N4tuvungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
