import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N5TuvungComponent } from './n5-tuvung.component';

describe('N5TuvungComponent', () => {
  let component: N5TuvungComponent;
  let fixture: ComponentFixture<N5TuvungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N5TuvungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N5TuvungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
